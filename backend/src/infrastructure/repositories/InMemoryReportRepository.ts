import type { IReportRepository } from "../../domain/ports/IReportRepository"
import type { Report, CreateReportDTO, UpdateReportDTO } from "../../domain/entities/Report"
import { v4 as uuidv4 } from "uuid"

export class InMemoryReportRepository implements IReportRepository {
  private reports: Report[] = []

  async findAll(): Promise<Report[]> {
    return this.reports
  }

  async findById(id: string): Promise<Report | null> {
    return this.reports.find((report) => report.id === id) || null
  }

  async findByUserId(userId: string): Promise<Report[]> {
    return this.reports.filter((report) => report.userId === userId)
  }

  async findByStatus(status: string): Promise<Report[]> {
    return this.reports.filter((report) => report.status === status)
  }

  async create(reportData: CreateReportDTO): Promise<Report> {
    const report: Report = {
      id: uuidv4(),
      ...reportData,
      status: "pending",
      priority: "medium",
      photos: reportData.photos || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.reports.push(report)
    return report
  }

  async update(id: string, reportData: UpdateReportDTO): Promise<Report | null> {
    const index = this.reports.findIndex((report) => report.id === id)
    if (index === -1) return null

    this.reports[index] = {
      ...this.reports[index],
      ...reportData,
      updatedAt: new Date(),
    }
    return this.reports[index]
  }

  async delete(id: string): Promise<boolean> {
    const index = this.reports.findIndex((report) => report.id === id)
    if (index === -1) return false

    this.reports.splice(index, 1)
    return true
  }
}
