import type { Request, Response } from 'express'
import { mailtrap } from '../config/mailtrap.js'
import { env } from '../config/env.js'
import { logo } from '../config/logo.js'
import { renderCurriculumEmail } from '../templates/curriculum-email.js'
import type { CurriculumRequestInput } from '../schemas/curriculum-email-schema.js'

export async function sendCurriculumEmail(req: Request, res: Response): Promise<void> {
  const { body, file } = res.locals.validated as CurriculumRequestInput
  const { name, email, phone } = body
  const pdfFile = file

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
      to: [{ email: env.mailtrap.toCurriculum }, { email: 'sktisolucoes@gmail.com' }],
      subject: `Novo currículo de ${name}`,
      text: `Novo currículo recebido\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nCurrículo anexado: ${resumeAttachment.filename}`,
      html: renderCurriculumEmail({
        name,
        email,
        phone,
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
