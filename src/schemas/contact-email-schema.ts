import { z } from 'zod'
import { emailSchema, nameSchema } from './shared.ts'

export const contactEmailSchema = z
  .object({
    firstName: nameSchema.max(50, 'O primeiro nome deve ter no máximo 50 caracteres'),
    lastName: nameSchema.max(50, 'O sobrenome deve ter no máximo 50 caracteres'),
    email: emailSchema,
    subject: z
      .string({ error: 'O campo assunto é obrigatório' })
      .trim()
      .min(3, 'O assunto deve ter pelo menos 3 caracteres')
      .max(100, 'O assunto deve ter no máximo 100 caracteres'),
    message: z
      .string({ error: 'O campo mensagem é obrigatório' })
      .trim()
      .min(10, 'A mensagem deve ter pelo menos 10 caracteres')
      .max(2000, 'A mensagem deve ter no máximo 2000 caracteres'),
  })
  .strict()

export type ContactEmailInput = z.infer<typeof contactEmailSchema>
