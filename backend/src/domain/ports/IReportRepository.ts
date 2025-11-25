import type { Report, CreateReportDTO, UpdateReportDTO } from "../entities/Report"

export interface IReportRepository {
  findAll(): Promise<Report[]>
  findById(id: string): Promise<Report | null>
  findByUserId(userId: string): Promise<Report[]>
  findByStatus(status: string): Promise<Report[]>
  create(report: CreateReportDTO): Promise<Report>
  update(id: string, report: UpdateReportDTO): Promise<Report | null>
  delete(id: string): Promise<boolean>
}
