import cors from 'cors'
import express from 'express'
import { env } from './config/env.js'
import { swaggerDocsHtml } from './config/swagger-docs.js'
import { errorHandler } from './middlewares/error-handler-middleware.js'
import { notFoundHandler } from './middlewares/not-found-middleware.js'
import routes from './routes/index.js'

export function createApp(): express.Express {
  const app = express()

  app.use(cors({ origin: env.corsOrigin }))

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/api-docs', (_req, res) => res.send(swaggerDocsHtml))
  app.get('/api-docs/', (_req, res) => res.send(swaggerDocsHtml))

  app.use(routes)

  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
