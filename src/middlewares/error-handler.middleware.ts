import type { ErrorRequestHandler, Request, Response } from 'express'

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: unknown,
): void => {
  console.error(err)

  res.status(500).json({
    message: 'Internal server error',
  })
}
