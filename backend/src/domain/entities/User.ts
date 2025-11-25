export interface User {
  id: string
  email: string
  password: string
  name: string
  phone: string
  role: "user" | "admin"
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserDTO {
  email: string
  password: string
  name: string
  phone: string
  role?: "user" | "admin"
}

export interface UpdateUserDTO {
  email?: string
  name?: string
  phone?: string
}
