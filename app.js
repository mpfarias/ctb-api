import express from 'express'
import infracaoRoutes from './routes/infracao.routes.js'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './docs/swagger.js'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'

const app = express()
const PORT =  process.env.PORT || 3000

app.use(morgan('dev'))

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, 
  max: 50,
  message: 'Muitas requisições. Tente novamente em 2 minutos.',
  standardHeaders: true, // Exibe os headers de rate limit no response
  legacyHeaders: false // Desativa headers antigos (X-RateLimit-*)
})

app.use(limiter) // Aplica globalmente o rate limit
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API de Infrações do CTB!')
})

app.use('/infracoes', infracaoRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})