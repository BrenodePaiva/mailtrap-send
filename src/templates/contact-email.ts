import { BRAND_COLOR, BRAND_COLOR_LIGHT, escapeHtml, renderEmailLayout } from './shared.ts'

interface ContactEmailData {
  firstName: string
  lastName: string
  email: string
  message: string
  brandName: string
  hasLogo: boolean
}

export function renderContactEmail(data: ContactEmailData): string {
  const firstName = escapeHtml(data.firstName)
  const lastName = escapeHtml(data.lastName)
  const email = escapeHtml(data.email)
  const message = escapeHtml(data.message)
  const brandName = escapeHtml(data.brandName)

  const body = `
                    <!-- Saudação -->
                    <tr>
                      <td>
                        <p style="margin:0;font-size:18px;line-height:26px;font-weight:600;color:#0f172a;">Você recebeu uma nova mensagem</p>
                        <div style="height:1px;background-color:#e2e8f0;margin:20px 0;"></div>
                      </td>
                    </tr>

                    <!-- Dados de contato -->
                    <tr>
                      <td>
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="width:110px;padding:6px 0;">
                              <p style="margin:0;font-size:12px;line-height:16px;text-transform:uppercase;letter-spacing:0.8px;color:#64748b;">Nome</p>
                            </td>
                            <td style="padding:6px 0;">
                              <p style="margin:0;font-size:15px;line-height:20px;color:#1e293b;">${firstName} ${lastName}</p>
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
                        </table>
                      </td>
                    </tr>

                    <!-- Espaçamento -->
                    <tr>
                      <td style="height:24px;"></td>
                    </tr>

                    <!-- Mensagem em destaque -->
                    <tr>
                      <td>
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BRAND_COLOR_LIGHT};border-left:4px solid ${BRAND_COLOR};border-radius:10px;">
                          <tr>
                            <td style="padding:20px 24px;">
                              <p style="margin:0 0 10px;font-size:12px;line-height:16px;text-transform:uppercase;letter-spacing:0.8px;color:${BRAND_COLOR};font-weight:700;">Mensagem</p>
                              <p style="margin:0;font-size:15px;line-height:24px;color:#1e293b;white-space:pre-line;">${message}</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>`

  return renderEmailLayout({
    title: 'Nova mensagem de contato',
    brandName: data.brandName,
    hasLogo: data.hasLogo,
    body,
    footer: `Esta mensagem foi enviada pelo formulário de contato do <strong>${brandName}</strong>.`,
  })
}
