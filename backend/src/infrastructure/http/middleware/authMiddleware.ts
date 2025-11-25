import type { Request, Response, NextFunction } from "express"
import { AuthService } from "../../adapters/AuthService"

const authService = new AuthService()

export interface AuthRequest extends Request {
  user?: {
    userId: string
    role: string
  }
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace("Bearer ", "")

  if (!token) {
    return res.status(401).json({ error: "No token provided" })
  }

  const decoded = authService.verifyToken(token)

  if (!decoded) {
    return res.status(401).json({ error: "Invalid token" })
  }

  req.user = decoded
  next()
}

export const adminMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" })
  }
  next()
}
