import type { IUserRepository } from "../../domain/ports/IUserRepository"
import type { User, CreateUserDTO, UpdateUserDTO } from "../../domain/entities/User"
import { v4 as uuidv4 } from "uuid"

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = []

  async findAll(): Promise<User[]> {
    return this.users
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find((user) => user.id === id) || null
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find((user) => user.email === email) || null
  }

  async create(userData: CreateUserDTO): Promise<User> {
    const user: User = {
      id: uuidv4(),
      ...userData,
      role: userData.role || "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    this.users.push(user)
    return user
  }

  async update(id: string, userData: UpdateUserDTO): Promise<User | null> {
    const index = this.users.findIndex((user) => user.id === id)
    if (index === -1) return null

    this.users[index] = {
      ...this.users[index],
      ...userData,
      updatedAt: new Date(),
    }
    return this.users[index]
  }

  async delete(id: string): Promise<boolean> {
    const index = this.users.findIndex((user) => user.id === id)
    if (index === -1) return false

    this.users.splice(index, 1)
    return true
  }
}
