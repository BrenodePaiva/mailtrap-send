import type { Request, Response } from 'express'
import { mailtrap } from '../config/mailtrap.js'
import { env } from '../config/env.js'
import { logo } from '../config/logo.js'
import { renderContactEmail } from '../templates/contact-email.js'
import type { ContactEmailInput } from '../schemas/contact-email-schema.js'

export async function sendContactEmail(req: Request, res: Response): Promise<void> {
  const { firstName, lastName, email, subject, message } = res.locals.validated as ContactEmailInput

  try {
    const result = await mailtrap.send({
      from: {
        name: env.mailtrap.senderContact,
        email: env.mailtrap.senderEmail,
      },
      to: [{ email: env.mailtrap.toContact }],
      subject,
      text: `Nova mensagem de contato\n\nNome: ${firstName} ${lastName}\nE-mail: ${email}\n\nMensagem:\n${message}`,
      html: renderContactEmail({
        firstName,
        lastName,
        email,
        message,
        brandName: env.mailtrap.brandName,
        hasLogo: logo !== null,
      }),
      ...(logo ? { attachments: [logo] } : {}),
    })

    res.status(200).json({
      message: 'E-mail enviado com sucesso',
      result,
    })
  } catch (err) {
    console.error(err)
    res.status(502).json({
      message: 'Falha ao enviar o e-mail',
    })
  }
}
