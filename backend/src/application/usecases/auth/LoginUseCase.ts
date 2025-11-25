import type { IUserRepository } from "../../../domain/ports/IUserRepository"
import type { IAuthService } from "../../../domain/ports/IAuthService"

export class LoginUseCase {
  constructor(
    private userRepository: IUserRepository,
    private authService: IAuthService,
  ) {}

  async execute(email: string, password: string): Promise<{ token: string; user: any } | null> {
    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      return null
    }

    const isValidPassword = await this.authService.comparePassword(password, user.password)

    if (!isValidPassword) {
      return null
    }

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
