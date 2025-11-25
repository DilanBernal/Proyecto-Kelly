import pool from "../database/connection"
import type { Report } from "../../domain/entities/Report"
import type { IReportRepository } from "../../domain/ports/IReportRepository"

export class PostgresReportRepository implements IReportRepository {
  async findById(id: string): Promise<Report | null> {
    const result = await pool.query("SELECT * FROM reports WHERE id = $1", [id])

    if (result.rows.length === 0) return null

    return this.mapRowToReport(result.rows[0])
  }

  async findAll(filters?: { status?: string; categoryId?: string; userId?: string }): Promise<Report[]> {
    let query = "SELECT * FROM reports WHERE 1=1"
    const values: any[] = []
    let paramCount = 1

    if (filters?.status) {
      query += ` AND status = $${paramCount++}`
      values.push(filters.status)
    }
    if (filters?.categoryId) {
      query += ` AND category_id = $${paramCount++}`
      values.push(filters.categoryId)
    }
    if (filters?.userId) {
      query += ` AND user_id = $${paramCount++}`
      values.push(filters.userId)
    }

    query += " ORDER BY created_at DESC"

    const result = await pool.query(query, values)
    return result.rows.map((row) => this.mapRowToReport(row))
  }

  async create(report: Omit<Report, "id" | "createdAt" | "updatedAt">): Promise<Report> {
    const result = await pool.query(
      `INSERT INTO reports (user_id, category_id, title, description, address, latitude, longitude, status, priority, image_urls, admin_notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING *`,
      [
        report.userId,
        report.categoryId,
        report.title,
        report.description,
        report.address,
        report.latitude,
        report.longitude,
        report.status || "pending",
        report.priority || "medium",
        report.imageUrls || [],
        report.adminNotes || null,
      ],
    )

    return this.mapRowToReport(result.rows[0])
  }

  async update(id: string, data: Partial<Report>): Promise<Report | null> {
    const fields: string[] = []
    const values: any[] = []
    let paramCount = 1

    if (data.title !== undefined) {
      fields.push(`title = $${paramCount++}`)
      values.push(data.title)
    }
    if (data.description !== undefined) {
      fields.push(`description = $${paramCount++}`)
      values.push(data.description)
    }
    if (data.status !== undefined) {
      fields.push(`status = $${paramCount++}`)
      values.push(data.status)
      if (data.status === "resolved") {
        fields.push(`resolved_at = CURRENT_TIMESTAMP`)
      }
    }
    if (data.priority !== undefined) {
      fields.push(`priority = $${paramCount++}`)
      values.push(data.priority)
    }
    if (data.adminNotes !== undefined) {
      fields.push(`admin_notes = $${paramCount++}`)
      values.push(data.adminNotes)
    }

    if (fields.length === 0) return this.findById(id)

    values.push(id)
    const result = await pool.query(
      `UPDATE reports SET ${fields.join(", ")}, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $${paramCount} RETURNING *`,
      values,
    )

    if (result.rows.length === 0) return null
    return this.mapRowToReport(result.rows[0])
  }

  async delete(id: string): Promise<boolean> {
    const result = await pool.query("DELETE FROM reports WHERE id = $1", [id])
    return result.rowCount !== null && result.rowCount > 0
  }

  async getStatsByCategory(): Promise<any[]> {
    const result = await pool.query(`
      SELECT 
        c.name as category,
        c.icon,
        c.color,
        COUNT(r.id) as total,
        SUM(CASE WHEN r.status = 'pending' THEN 1 ELSE 0 END) as pending,
        SUM(CASE WHEN r.status = 'in_progress' THEN 1 ELSE 0 END) as in_progress,
        SUM(CASE WHEN r.status = 'resolved' THEN 1 ELSE 0 END) as resolved
      FROM categories c
      LEFT JOIN reports r ON c.id = r.category_id
      GROUP BY c.id, c.name, c.icon, c.color
      ORDER BY total DESC
    `)

    return result.rows
  }

  private mapRowToReport(row: any): Report {
    return {
      id: row.id.toString(),
      userId: row.user_id.toString(),
      categoryId: row.category_id.toString(),
      title: row.title,
      description: row.description,
      address: row.address,
      latitude: Number.parseFloat(row.latitude),
      longitude: Number.parseFloat(row.longitude),
      status: row.status,
      priority: row.priority,
      imageUrls: row.image_urls || [],
      adminNotes: row.admin_notes,
      resolvedAt: row.resolved_at,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }
  }
}
