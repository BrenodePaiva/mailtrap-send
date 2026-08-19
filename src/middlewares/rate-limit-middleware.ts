import { rateLimit } from 'express-rate-limit'

// Limita envios por IP em uma janela de 15 minutos para evitar abuso dos
// endpoints de e-mail (o envio consome créditos do Mailtrap).
export const emailRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Muitas tentativas. Tente novamente mais tarde.',
  },
})
