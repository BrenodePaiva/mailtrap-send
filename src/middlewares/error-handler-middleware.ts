import type { ErrorRequestHandler, Request, Response } from 'express'
import { env } from '../config/env.ts'

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: unknown,
): void => {
  console.error(err)

  const multerError = err as { name?: string; code?: string }
  if (multerError.name === 'MulterError') {
    const isSizeLimit = multerError.code === 'LIMIT_FILE_SIZE'
    res.status(isSizeLimit ? 413 : 400).json({
      message: isSizeLimit
        ? `Arquivo excede o tamanho máximo permitido (${env.mailtrap.maxResumeSizeMb} MB)`
        : 'Erro ao processar o arquivo enviado',
    })
    return
  }

  res.status(500).json({
    message: 'Internal server error',
  })
}
