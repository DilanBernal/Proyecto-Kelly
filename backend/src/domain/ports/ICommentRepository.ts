import type { Comment, CreateCommentDTO } from "../entities/Comment"

export interface ICommentRepository {
  findByReportId(reportId: string): Promise<Comment[]>
  create(comment: CreateCommentDTO): Promise<Comment>
  delete(id: string): Promise<boolean>
}
