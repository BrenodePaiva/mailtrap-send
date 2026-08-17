import { MailtrapClient } from 'mailtrap'
import { env } from './env.js'

export const mailtrap = new MailtrapClient({
  token: env.mailtrap.apiToken,
})
