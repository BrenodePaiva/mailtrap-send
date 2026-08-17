import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import type { Attachment } from 'mailtrap'
import { env } from './env.js'
import { LOGO_BASE64 } from '../assets/logo-data.js'

const MIME_BY_EXTENSION: Record<string, string> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
}

function loadLogo(): Attachment | null {
  const logoPath = path.resolve(env.mailtrap.logoPath)

  if (existsSync(logoPath)) {
    const extension = path.extname(logoPath).toLowerCase()
    const type = MIME_BY_EXTENSION[extension]

    if (type) {
      return {
        filename: path.basename(logoPath),
        type,
        content: readFileSync(logoPath),
        disposition: 'inline',
        content_id: 'logo',
      }
    }

    console.warn(`Tipo de logo não suportado: ${extension}, usando logo embutida.`)
  }

  if (LOGO_BASE64.length > 0) {
    return {
      filename: 'logo.png',
      type: 'image/png',
      content: Buffer.from(LOGO_BASE64, 'base64'),
      disposition: 'inline',
      content_id: 'logo',
    }
  }

  console.warn('Logo não disponível, usando nome da marca no header.')
  return null
}

export const logo: Attachment | null = loadLogo()
