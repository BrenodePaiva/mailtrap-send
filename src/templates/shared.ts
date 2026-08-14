export const BRAND_COLOR = '#016979'
export const BRAND_COLOR_LIGHT = '#ced4da'
export const HEADER_COLOR = '#00414b'

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

interface BrandHeaderData {
  brandName: string
  hasLogo: boolean
}

export function renderBrandHeader(data: BrandHeaderData): string {
  const brandName = escapeHtml(data.brandName)

  return data.hasLogo
    ? `<img src="cid:logo" alt="${brandName}" height="40" style="display:block;max-height:40px;width:auto;border:0;outline:none;text-decoration:none;" />`
    : `<p style="margin:0;font-size:22px;line-height:26px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">${brandName}</p>`
}

interface EmailLayoutData {
  title: string
  brandName: string
  hasLogo: boolean
  body: string
  footer: string
}

export function renderEmailLayout(data: EmailLayoutData): string {
  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>${data.title}</title>
    <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style>
      body, table, td, a {
        margin: 0;
        padding: 0;
      }
      body {
        background-color: #f4f6fb;
        color: #1e293b;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      @media (max-width: 640px) {
        .container {
          width: 100% !important;
        }
        .content-padding {
          padding: 24px 20px !important;
        }
        .header-padding {
          padding: 28px 20px !important;
        }
        .footer-padding {
          padding: 20px !important;
        }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f6fb;">
    <center style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6fb;">
        <tr>
          <td align="center" style="padding:32px 16px;">
            <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(30,58,138,0.08);">

              <!-- Cabeçalho -->
              <tr>
                <td class="header-padding" style="background-color:${HEADER_COLOR};padding:32px 40px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="left">
                        ${renderBrandHeader(data)}
                        <p style="margin:6px 0 0;font-size:13px;line-height:18px;color:#c7d2fe;">${data.title}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Corpo -->
              <tr>
                <td class="content-padding" style="padding:36px 40px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

                    ${data.body}

                  </table>
                </td>
              </tr>

              <!-- Rodapé -->
              <tr>
                <td class="footer-padding" style="padding:20px 40px;background-color:#f8fafc;border-top:1px solid #e2e8f0;">
                  <p style="margin:0;font-size:12px;line-height:18px;color:#94a3b8;text-align:center;">${data.footer}</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>`
}
