import { Router } from 'express'
import { sendContactEmail } from '../controllers/contact-email-controller.ts'
import { validateSchema } from '../middlewares/validate-schema-middleware.ts'
import { contactEmailSchema } from '../schemas/contact-email-schema.ts'

const router = Router()

/**
 * @swagger
 * /api/emails/send-contact:
 *   post:
 *     summary: Envia um e-mail de contato via Mailtrap
 *     tags: [Emails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - subject
 *               - message
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: João
 *               lastName:
 *                 type: string
 *                 example: Silva
 *               email:
 *                 type: string
 *                 format: email
 *                 example: joao@email.com
 *               subject:
 *                 type: string
 *                 example: Dúvida sobre serviços
 *               message:
 *                 type: string
 *                 example: Olá, gostaria de mais informações.
 *     responses:
 *       200:
 *         description: E-mail enviado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Dados inválidos
 *                 errors:
 *                  type: object
 *                  properties:
 *                    (campoInválido):
 *                      type: array
 *                      items:
 *                          type: string
 *                          example: mensagem
 *
 *
 *       502:
 *         description: Falha ao enviar o e-mail
 */
router.post('/emails/send-contact', validateSchema(contactEmailSchema), sendContactEmail)

export default router
