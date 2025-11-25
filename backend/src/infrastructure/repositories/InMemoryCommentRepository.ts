import type { ICommentRepository } from "../../domain/ports/ICommentRepository"
import type { Comment, CreateCommentDTO } from "../../domain/entities/Comment"
import { v4 as uuidv4 } from "uuid"

export class InMemoryCommentRepository implements ICommentRepository {
  private comments: Comment[] = []

  async findByReportId(reportId: string): Promise<Comment[]> {
    return this.comments.filter((comment) => comment.reportId === reportId)
  }

  async create(commentData: CreateCommentDTO): Promise<Comment> {
    const comment: Comment = {
      id: uuidv4(),
      ...commentData,
      createdAt: new Date(),
    }
    this.comments.push(comment)
    return comment
  }

  async delete(id: string): Promise<boolean> {
    const index = this.comments.findIndex((comment) => comment.id === id)
    if (index === -1) return false

    this.comments.splice(index, 1)
    return true
  }
}
