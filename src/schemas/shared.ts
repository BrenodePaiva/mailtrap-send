import { z } from 'zod'
import { env } from '../config/env.js'

export const emailSchema = z
  .string({ error: 'O campo e-mail é obrigatório' })
  .trim()
  .pipe(z.email('Informe um e-mail válido'))

export const nameSchema = z
  .string({ error: 'O campo nome é obrigatório' })
  .trim()
  .min(2, 'O nome deve ter pelo menos 2 caracteres')
  .max(100, 'O nome deve ter no máximo 100 caracteres')
  .regex(/^[A-Za-zÀ-ÿ\s.'-]+$/, 'O nome contém caracteres inválidos')

export const phoneSchema = z
  .string({ error: 'O campo telefone é obrigatório' })
  .trim()
  .regex(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/, 'Informe um telefone válido (ex.: (11) 99999-9999)')

const maxResumeSizeBytes = env.mailtrap.maxResumeSizeMb * 1024 * 1024

export const resumeFileSchema = z.custom<Express.Multer.File>().superRefine((file, ctx) => {
  if (!file) {
    ctx.addIssue({ code: 'custom', message: 'O currículo em PDF é obrigatório' })
    return
  }

  const isPdf =
    file.mimetype === 'application/pdf' && file.buffer.subarray(0, 5).toString('latin1') === '%PDF-'

  if (!isPdf) {
    ctx.addIssue({ code: 'custom', message: 'O currículo deve ser um arquivo PDF' })
    return
  }

  if (file.size > maxResumeSizeBytes) {
    ctx.addIssue({
      code: 'custom',
      message: `O currículo excede o tamanho máximo de ${env.mailtrap.maxResumeSizeMb} MB`,
    })
  }
})
