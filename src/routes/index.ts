import { Router } from 'express'
import healthRoutes from './health-routes.js'
import contactEmailRoutes from './contact-email-routes.js'
import curriculumEmailRoutes from './curriculum-email-routes.js'

const router = Router()

router.use('/api', healthRoutes)
router.use('/api', contactEmailRoutes)
router.use('/api', curriculumEmailRoutes)

export default router
