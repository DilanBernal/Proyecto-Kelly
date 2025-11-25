import type { IReportRepository } from "../../../domain/ports/IReportRepository"
import type { CreateReportDTO } from "../../../domain/entities/Report"

export class CreateReportUseCase {
  constructor(private reportRepository: IReportRepository) {}

  async execute(reportData: CreateReportDTO) {
    return await this.reportRepository.create(reportData)
  }
}
