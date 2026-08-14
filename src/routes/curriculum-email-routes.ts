import { Router } from 'express'
import { sendCurriculumEmail } from '../controllers/curriculum-email-controller.ts'
import { uploadResume } from '../middlewares/upload-middleware.ts'

const router = Router()

/**
 * @swagger
 * /api/emails/send-curriculum:
 *   post:
 *     summary: Envia um currículo em PDF via Mailtrap
 *     tags: [Emails]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - resume
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 format: email
 *                 example: joao@email.com
 *               phone:
 *                 type: string
 *                 example: (21) 99999-9999
 *               resume:
 *                 type: string
 *                 format: binary
 *                 description: Currículo em PDF (máx. 5 MB)
 *     responses:
 *       200:
 *         description: Currículo enviado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Campos obrigatórios ausentes ou arquivo inválido
 *       413:
 *         description: Arquivo excede o tamanho máximo permitido
 *       502:
 *         description: Falha ao enviar o e-mail
 */
router.post('/emails/send-curriculum', uploadResume, sendCurriculumEmail)

export default router
