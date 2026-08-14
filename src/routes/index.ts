import { Router } from 'express'
import healthRoutes from './health-routes.ts'
import emailRoutes from './email-routes.ts'

const router = Router()

router.use('/api', healthRoutes)
router.use('/api', emailRoutes)

export default router
