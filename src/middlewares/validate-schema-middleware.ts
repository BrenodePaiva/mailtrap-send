import type { NextFunction, Request, Response } from 'express'
import type { ZodType } from 'zod'

type ValidationSource = 'body' | 'body-and-file'

export function validateSchema<T extends ZodType>(
  schema: T,
  source: ValidationSource = 'body',
): (req: Request, res: Response, next: NextFunction) => void {
  return (req, res, next) => {
    const input = source === 'body-and-file' ? { body: req.body, file: req.file } : req.body
    const result = schema.safeParse(input)

    if (!result.success) {
      const fieldErrors: Record<string, string[]> = {}
      const formErrors: string[] = []

      for (const issue of result.error.issues) {
        if (issue.code === 'unrecognized_keys') {
          for (const key of issue.keys) {
            formErrors.push(`Campo não permitido: ${key}`)
          }
          continue
        }

        const field = issue.path[0]
        if (typeof field === 'string') {
          ;(fieldErrors[field] ??= []).push(issue.message)
        } else {
          formErrors.push(issue.message)
        }
      }

      res.status(400).json({
        message: 'Dados inválidos',
        errors: fieldErrors,
        ...(formErrors.length > 0 ? { formErrors } : {}),
      })
      return
    }

    res.locals.validated = result.data
    next()
  }
}
