import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import type { IAuthService } from "../../domain/ports/IAuthService"

export class AuthService implements IAuthService {
  private jwtSecret: string

  constructor() {
    this.jwtSecret = process.env.JWT_SECRET || "your-secret-key-change-this"
  }

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10)
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
  }

  generateToken(userId: string, role: string): string {
    return jwt.sign({ userId, role }, this.jwtSecret, { expiresIn: "7d" })
  }

  verifyToken(token: string): { userId: string; role: string } | null {
    try {
      const decoded = jwt.verify(token, this.jwtSecret) as { userId: string; role: string }
      return decoded
    } catch {
      return null
    }
  }
}
