import type { User, CreateUserDTO, UpdateUserDTO } from "../entities/User"

export interface IUserRepository {
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(user: CreateUserDTO): Promise<User>
  update(id: string, user: UpdateUserDTO): Promise<User | null>
  delete(id: string): Promise<boolean>
}
