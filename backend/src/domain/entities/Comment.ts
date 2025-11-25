export interface Comment {
  id: string
  reportId: string
  userId: string
  userName: string
  message: string
  isAdmin: boolean
  createdAt: Date
}

export interface CreateCommentDTO {
  reportId: string
  userId: string
  userName: string
  message: string
  isAdmin: boolean
}
