import { BRAND_COLOR, BRAND_COLOR_LIGHT, escapeHtml, renderEmailLayout } from './shared.ts'

interface CurriculumEmailData {
  name: string
  email: string
  phone: string
  fileName: string
  fileSize: number
  brandName: string
  hasLogo: boolean
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export function renderCurriculumEmail(data: CurriculumEmailData): string {
  const name = escapeHtml(data.name)
  const email = escapeHtml(data.email)
  const phone = escapeHtml(data.phone)
  const fileName = escapeHtml(data.fileName)
  const brandName = escapeHtml(data.brandName)

  const body = `
                    <!-- Saudação -->
                    <tr>
                      <td>
                        <p style="margin:0;font-size:18px;line-height:26px;font-weight:600;color:#0f172a;">Você recebeu um novo currículo</p>
                        <div style="height:1px;background-color:#e2e8f0;margin:20px 0;"></div>
                      </td>
                    </tr>

                    <!-- Dados do candidato -->
                    <tr>
                      <td>
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="width:110px;padding:6px 0;">
                              <p style="margin:0;font-size:12px;line-height:16px;text-transform:uppercase;letter-spacing:0.8px;color:#64748b;">Nome</p>
                            </td>
                            <td style="padding:6px 0;">
                              <p style="margin:0;font-size:15px;line-height:20px;color:#1e293b;">${name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="width:110px;padding:6px 0;">
                              <p style="margin:0;font-size:12px;line-height:16px;text-transform:uppercase;letter-spacing:0.8px;color:#64748b;">E-mail</p>
                            </td>
                            <td style="padding:6px 0;">
                              <a href="mailto:${email}" style="margin:0;font-size:15px;line-height:20px;color:${BRAND_COLOR};text-decoration:underline;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="width:110px;padding:6px 0;">
                              <p style="margin:0;font-size:12px;line-height:16px;text-transform:uppercase;letter-spacing:0.8px;color:#64748b;">Telefone</p>
                            </td>
                            <td style="padding:6px 0;">
                              <p style="margin:0;font-size:15px;line-height:20px;color:#1e293b;">${phone}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Espaçamento -->
                    <tr>
                      <td style="height:24px;"></td>
                    </tr>

                    <!-- Currículo em destaque -->
                    <tr>
                      <td>
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND_COLOR_LIGHT};border-left:4px solid ${BRAND_COLOR};border-radius:10px;">
                          <tr>
                            <td style="padding:20px 24px;">
                              <p style="margin:0 0 10px;font-size:12px;line-height:16px;text-transform:uppercase;letter-spacing:0.8px;color:${BRAND_COLOR};font-weight:700;">Currículo anexado</p>
                              <p style="margin:0;font-size:15px;line-height:22px;color:#1e293b;">${fileName}</p>
                              <p style="margin:4px 0 0;font-size:13px;line-height:18px;color:#64748b;">PDF • ${formatFileSize(data.fileSize)}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>`

  return renderEmailLayout({
    title: 'Novo currículo recebido',
    brandName: data.brandName,
    hasLogo: data.hasLogo,
    body,
    footer: `Esta mensagem foi enviada pelo formulário de currículo do <strong>${brandName}</strong>.`,
  })
}
