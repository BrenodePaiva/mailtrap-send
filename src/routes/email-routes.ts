import { Router } from 'express'
import { sendEmail } from '../controllers/email-controller.ts'

const router = Router()

/**
 * @swagger
 * /api/emails/send:
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
 *       400:
 *         description: Campos obrigatórios ausentes
 *       502:
 *         description: Falha ao enviar o e-mail
 */
router.post('/emails/send', sendEmail)

export default router
