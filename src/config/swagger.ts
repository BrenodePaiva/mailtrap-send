import swaggerJsdoc from 'swagger-jsdoc'

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Mailtrap Send Email API',
      version: '1.0.0',
      description: 'API para envio de e-mails via Mailtrap',
    },
    servers: [
      {
        url: 'https://mailtrap-send.vercel.app',
        description: 'Production',
      },
      {
        url: 'http://localhost:3000',
        description: 'Local development',
      },
    ],
  },
  apis: ['./src/**/*.ts', './src/**/*.js'],
}

export const swaggerSpec = swaggerJsdoc(options)
