import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './config/swagger.js'
import { errorHandler } from './middlewares/error-handler-middleware.js'
import { notFoundHandler } from './middlewares/not-found-middleware.js'
import routes from './routes/index.js'

export function createApp(): express.Express {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  app.use(routes)

  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
