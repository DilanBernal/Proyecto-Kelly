export interface Report {
  id: string
  userId: string
  title: string
  description: string
  category: string
  status: "pending" | "in_progress" | "resolved" | "rejected"
  priority: "low" | "medium" | "high"
  latitude: number
  longitude: number
  address: string
  photos: string[]
  createdAt: Date
  updatedAt: Date
}

export interface CreateReportDTO {
  userId: string
  title: string
  description: string
  category: string
  latitude: number
  longitude: number
  address: string
  photos?: string[]
}

export interface UpdateReportDTO {
  title?: string
  description?: string
  category?: string
  status?: "pending" | "in_progress" | "resolved" | "rejected"
  priority?: "low" | "medium" | "high"
}
