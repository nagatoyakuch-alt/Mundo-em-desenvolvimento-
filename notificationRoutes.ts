import { Router } from 'express'
import {
  getNotifications,
  markAsRead
} from '../controllers/notificationController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = Router()

// Listar notificações
router.get('/', authMiddleware, getNotifications)

// Marcar como lida
router.patch('/:id/read', authMiddleware, markAsRead)

export default router