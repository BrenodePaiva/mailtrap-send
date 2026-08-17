import { z } from 'zod'
import { emailSchema, nameSchema, phoneSchema, resumeFileSchema } from './shared.ts'

export const curriculumBodySchema = z
  .object({
    name: nameSchema.max(120, 'O nome deve ter no máximo 120 caracteres'),
    email: emailSchema,
    phone: phoneSchema,
  })
  .strict()

export const curriculumRequestSchema = z
  .object({
    body: curriculumBodySchema,
    file: resumeFileSchema,
  })
  .strict()

export type CurriculumRequestInput = z.infer<typeof curriculumRequestSchema>
