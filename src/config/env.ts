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
} as const
