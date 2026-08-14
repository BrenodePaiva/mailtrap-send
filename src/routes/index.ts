import { Router } from 'express'
import healthRoutes from './health-routes.ts'
import contactEmailRoutes from './contact-email-routes.ts'
import curriculumEmailRoutes from './curriculum-email-routes.ts'

const router = Router()

router.use('/api', healthRoutes)
router.use('/api', contactEmailRoutes)
router.use('/api', curriculumEmailRoutes)

export default router
