import { Router } from "express"
import { PostgresCommentRepository } from "../../repositories/PostgresCommentRepository"
import { authMiddleware, type AuthRequest } from "../middleware/authMiddleware"

const router = Router()
const commentRepository = new PostgresCommentRepository()

router.get("/report/:reportId", authMiddleware, async (req, res) => {
  try {
    const comments = await commentRepository.findByReportId(req.params.reportId)
    res.json(comments)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})

router.post("/", authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { reportId, message } = req.body

    if (!reportId || !message) {
      return res.status(400).json({ error: "Report ID and message are required" })
    }

    const comment = await commentRepository.create({
      reportId,
      userId: req.user!.userId,
      userName: "User",
      message,
      isAdmin: req.user!.role === "admin",
    })

    res.status(201).json(comment)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})

export default router
