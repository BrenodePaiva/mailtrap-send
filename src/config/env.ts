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
  corsOrigin: getEnv('CORS_ORIGIN', 'http://localhost:8080'),
  mailtrap: {
    apiToken: getEnv('MAILTRAP_API_TOKEN'),
    senderEmail: getEnv('MAILTRAP_SENDER_EMAIL'),
    senderContact: getEnv('MAILTRAP_SENDER_CONTACT', 'Mailtrap'),
    senderCurriculum: getEnv('MAILTRAP_SENDER_CURRICULUM', 'Mailtrap'),
    brandName: getEnv('MAILTRAP_BRAND_NAME', 'Meu Site'),
    logoPath: getEnv('MAILTRAP_LOGO_PATH', 'src/assets/logo.png'),
    toContact: getEnv('MAILTRAP_TO_CONTACT'),
    toCurriculum: getEnv('MAILTRAP_TO_CURRICULUM'),
    maxResumeSizeMb: Number(getEnv('MAX_RESUME_SIZE_MB', '5')),
  },
} as const
