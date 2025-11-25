import type { IReportRepository } from "../../../domain/ports/IReportRepository"
import type { UpdateReportDTO } from "../../../domain/entities/Report"

export class UpdateReportUseCase {
  constructor(private reportRepository: IReportRepository) {}

  async execute(id: string, reportData: UpdateReportDTO) {
    return await this.reportRepository.update(id, reportData)
  }
}
