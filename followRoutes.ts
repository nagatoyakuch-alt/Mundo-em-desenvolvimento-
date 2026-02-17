import { Router } from 'express'
import {
  followUser,
  unfollowUser
} from '../controllers/followController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = Router()

// Seguir usuário
router.post('/:id', authMiddleware, followUser)

// Deixar de seguir
router.delete('/:id', authMiddleware, unfollowUser)

export default router