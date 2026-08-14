import type { Request, Response } from 'express'
import { mailtrap } from '../config/mailtrap.ts'
import { env } from '../config/env.ts'
import { logo } from '../config/logo.ts'
import { renderCurriculumEmail } from '../templates/curriculum-email.ts'

interface SendCurriculumEmailRequest {
  name: string
  email: string
  phone: string
}

const NAME_PATTERN = /^[A-Za-zÀ-ÿ\s.'-]{2,}$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^[+]?[\d\s().-]{10,15}$/

function isBrazilianPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return (digits.length === 10 || digits.length === 11) && PHONE_PATTERN.test(phone)
}

function isPdfBuffer(file: Express.Multer.File): boolean {
  return (
    file.mimetype === 'application/pdf' && file.buffer.subarray(0, 5).toString('latin1') === '%PDF-'
  )
}

export async function sendCurriculumEmail(req: Request, res: Response): Promise<void> {
  const { name, email, phone }: SendCurriculumEmailRequest = req.body ?? {}
  const file = req.file

  const errors: string[] = []

  if (!name || !NAME_PATTERN.test(name.trim())) {
    errors.push('Informe um nome válido')
  }

  if (!email || !EMAIL_PATTERN.test(email.trim())) {
    errors.push('Informe um e-mail válido')
  }

  if (!phone || !isBrazilianPhone(phone.trim())) {
    errors.push('Informe um telefone válido (ex.: (11) 99999-9999)')
  }

  if (!file) {
    errors.push('O currículo em PDF é obrigatório')
  } else if (!isPdfBuffer(file)) {
    errors.push('O currículo deve ser um arquivo PDF')
  } else if (file.size > env.mailtrap.maxResumeSizeMb * 1024 * 1024) {
    errors.push(`O currículo excede o tamanho máximo de ${env.mailtrap.maxResumeSizeMb} MB`)
  }

  if (errors.length > 0) {
    res.status(400).json({
      message: errors.join('; '),
    })
    return
  }

  const pdfFile = file as Express.Multer.File

  const resumeAttachment = {
    filename: pdfFile.originalname,
    type: 'application/pdf',
    content: pdfFile.buffer,
  }

  try {
    const result = await mailtrap.send({
      from: {
        name: env.mailtrap.senderCurriculum,
        email: env.mailtrap.senderEmail,
      },
      to: [{ email: env.mailtrap.toCurriculum }],
      subject: `Novo currículo de ${name.trim()}`,
      text: `Novo currículo recebido\n\nNome: ${name.trim()}\nE-mail: ${email.trim()}\nTelefone: ${phone.trim()}\n\nCurrículo anexado: ${resumeAttachment.filename}`,
      html: renderCurriculumEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        fileName: resumeAttachment.filename,
        fileSize: pdfFile.size,
        brandName: env.mailtrap.brandName,
        hasLogo: logo !== null,
      }),
      attachments: logo ? [logo, resumeAttachment] : [resumeAttachment],
    })

    res.status(200).json({
      message: 'Currículo enviado com sucesso',
      result,
    })
  } catch (err) {
    console.error(err)
    res.status(502).json({
      message: 'Falha ao enviar o e-mail',
    })
  }
}
