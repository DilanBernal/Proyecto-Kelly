import { Router } from "express"
import { LoginUseCase } from "../../../application/usecases/auth/LoginUseCase"
import { RegisterUseCase } from "../../../application/usecases/auth/RegisterUseCase"
import { PostgresUserRepository } from "../../repositories/PostgresUserRepository"
import { AuthService } from "../../adapters/AuthService"

const router = Router()
const userRepository = new PostgresUserRepository()
const authService = new AuthService()
const loginUseCase = new LoginUseCase(userRepository, authService)
const registerUseCase = new RegisterUseCase(userRepository, authService)

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" })
    }

    const result = await loginUseCase.execute(email, password)

    if (!result) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    res.json(result)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})

router.post("/register", async (req, res) => {
  try {
    const { email, password, name, phone } = req.body

    if (!email || !password || !name || !phone) {
      return res.status(400).json({ error: "All fields are required" })
    }

    const result = await registerUseCase.execute({ email, password, name, phone })

    res.status(201).json(result)
  } catch (error: any) {
    if (error.message === "User already exists") {
      return res.status(409).json({ error: error.message })
    }
    res.status(500).json({ error: "Internal server error" })
  }
})

export default router
