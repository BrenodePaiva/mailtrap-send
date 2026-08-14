import express from 'express'
import { errorHandler } from './middlewares/error-handler.middleware.ts'
import { notFoundHandler } from './middlewares/not-found.middleware.ts'
import routes from './routes/index.ts'

export function createApp(): express.Express {
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(routes)

  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
