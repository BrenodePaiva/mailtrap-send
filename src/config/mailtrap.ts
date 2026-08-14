import { MailtrapClient } from 'mailtrap'
import { env } from './env.ts'

export const mailtrap = new MailtrapClient({
  token: env.mailtrap.apiToken,
})
