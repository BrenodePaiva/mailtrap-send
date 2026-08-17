import { swaggerSpec } from './swagger.js'

const swaggerUiVersion = '5.32.13'

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mailtrap Send Email API</title>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@${swaggerUiVersion}/swagger-ui.css">
  <style>
    html {
      box-sizing: border-box;
      overflow: -moz-scrollbars-vertical;
      overflow-y: scroll;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0;
      background: #fafafa;
    }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@${swaggerUiVersion}/swagger-ui-bundle.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@${swaggerUiVersion}/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function () {
      const spec = __SWAGGER_SPEC__
      window.ui = SwaggerUIBundle({
        spec: spec,
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        layout: 'StandaloneLayout',
      })
    }
  </script>
</body>
</html>
`

export const swaggerDocsHtml = html.replace('__SWAGGER_SPEC__', JSON.stringify(swaggerSpec))
