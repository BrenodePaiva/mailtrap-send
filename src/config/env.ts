import 'dotenv/config'

function getEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

export const env = {
  port: Number(getEnv('PORT', '3000')),
  nodeEnv: getEnv('NODE_ENV', 'development'),
  mailtrap: {
    apiToken: getEnv('MAILTRAP_API_TOKEN'),
    senderEmail: getEnv('MAILTRAP_SENDER_EMAIL'),
    senderName: getEnv('MAILTRAP_SENDER_NAME', 'Mailtrap'),
    brandName: getEnv('MAILTRAP_BRAND_NAME', 'Meu Site'),
    logoPath: getEnv('MAILTRAP_LOGO_PATH', 'src/assets/logo.png'),
    toEmail: getEnv('MAILTRAP_TO_EMAIL'),
  },
} as const
