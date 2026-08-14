import { existsSync, readFileSync } from 'node:fs'
import path from 'node:path'
import type { Attachment } from 'mailtrap'
import { env } from './env.ts'

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

  if (!existsSync(logoPath)) {
    console.warn(`Logo não encontrada em ${logoPath}, usando nome da marca no header.`)
    return null
  }

  const extension = path.extname(logoPath).toLowerCase()
  const type = MIME_BY_EXTENSION[extension]

  if (!type) {
    console.warn(`Tipo de logo não suportado: ${extension}, usando nome da marca no header.`)
    return null
  }

  return {
    filename: path.basename(logoPath),
    type,
    content: readFileSync(logoPath),
    disposition: 'inline',
    content_id: 'logo',
  }
}

export const logo: Attachment | null = loadLogo()
