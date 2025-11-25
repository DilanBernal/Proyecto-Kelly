import { Router } from "express"
import pool from "../../database/connection"

const router = Router()

// Get all categories
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, description, icon, color FROM categories ORDER BY name")

    const categories = result.rows.map((row) => ({
      id: row.id.toString(),
      name: row.name,
      description: row.description,
      icon: row.icon,
      color: row.color,
    }))

    res.json(categories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

// Get category by ID
router.get("/:id", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, description, icon, color FROM categories WHERE id = $1", [
      req.params.id,
    ])

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Category not found" })
    }

    const row = result.rows[0]
    res.json({
      id: row.id.toString(),
      name: row.name,
      description: row.description,
      icon: row.icon,
      color: row.color,
    })
  } catch (error) {
    console.error("Error fetching category:", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

// Get report statistics by category
router.get("/stats/summary", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        c.id,
        c.name as category,
        c.icon,
        c.color,
        COUNT(r.id)::integer as total,
        SUM(CASE WHEN r.status = 'pending' THEN 1 ELSE 0 END)::integer as pending,
        SUM(CASE WHEN r.status = 'in_progress' THEN 1 ELSE 0 END)::integer as in_progress,
        SUM(CASE WHEN r.status = 'resolved' THEN 1 ELSE 0 END)::integer as resolved
      FROM categories c
      LEFT JOIN reports r ON c.id = r.category_id
      GROUP BY c.id, c.name, c.icon, c.color
      ORDER BY total DESC
    `)

    res.json(result.rows)
  } catch (error) {
    console.error("Error fetching category stats:", error)
    res.status(500).json({ error: "Internal server error" })
  }
})

export default router
