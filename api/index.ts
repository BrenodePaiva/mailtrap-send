import { createApp } from '../src/app.js'

// Permite até 60s de execução no Vercel (default é 10s no plano Hobby).
// Necessário para o envio com anexo de currículo não estourar o timeout.
export const config = { maxDuration: 60 }

export default createApp()
