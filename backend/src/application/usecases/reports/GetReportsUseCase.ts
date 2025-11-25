import type { IReportRepository } from "../../../domain/ports/IReportRepository"

export class GetReportsUseCase {
  constructor(private reportRepository: IReportRepository) {}

  async execute(filters?: { userId?: string; status?: string }) {
    if (filters?.userId) {
      return await this.reportRepository.findByUserId(filters.userId)
    }

    if (filters?.status) {
      return await this.reportRepository.findByStatus(filters.status)
    }

    return await this.reportRepository.findAll()
  }
}
