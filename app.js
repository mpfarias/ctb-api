import express from 'express'
import infracaoRoutes from './routes/infracao.routes.js'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './docs/swagger.js'

const app = express()
const PORT =  process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API de Infrações do CTB!')
})

app.use('/infracoes', infracaoRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, () => {
  console.log(`🚦 Servidor rodando em http://localhost:${PORT}`)
})