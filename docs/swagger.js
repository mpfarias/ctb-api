import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API - Infrações do CTB',
    version: '1.0.0',
    description: 'Consulta pública de infrações do Código de Trânsito Brasileiro',
  },
  servers: [
    {
      url: 'https://ctb-api.onrender.com',
      description: 'Servidor local',
    },
  ],
}

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Lê os comentários das rotas
}

export const swaggerSpec = swaggerJSDoc(options)