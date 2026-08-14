import { Router } from 'express'
import healthRoutes from './health-routes.ts'

const router = Router()

router.use('/api', healthRoutes)

export default router
