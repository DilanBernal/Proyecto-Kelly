import type { IUserRepository } from "../../../domain/ports/IUserRepository"
import type { IAuthService } from "../../../domain/ports/IAuthService"
import type { CreateUserDTO } from "../../../domain/entities/User"

export class RegisterUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authService: IAuthService,
  ) {}

  async execute(userData: CreateUserDTO): Promise<{ token: string; user: any } | null> {
    const existingUser = await this.userRepository.findByEmail(userData.email)

    if (existingUser) {
      throw new Error("User already exists")
    }

    const hashedPassword = await this.authService.hashPassword(userData.password)

    const user = await this.userRepository.create({
      ...userData,
      password: hashedPassword,
      role: userData.role || "user",
    })

    const token = this.authService.generateToken(user.id, user.role)

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        role: user.role,
      },
    }
  }
}
