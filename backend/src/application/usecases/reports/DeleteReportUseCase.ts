import type { IReportRepository } from "../../../domain/ports/IReportRepository"

export class DeleteReportUseCase {
  constructor(private reportRepository: IReportRepository) {}

  async execute(id: string) {
    return await this.reportRepository.delete(id)
  }
}
