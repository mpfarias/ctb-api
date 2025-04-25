import express from 'express'
import infracaoRoutes from './routes/infracao.routes.js'
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './docs/swagger.js'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'

const app = express()
const PORT =  process.env.PORT || 3000



const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, 
  max: 50,
  message: 'Muitas requisições. Tente novamente em 2 minutos.',
  standardHeaders: true, // Exibe os headers de rate limit no response
  legacyHeaders: false // Desativa headers antigos (X-RateLimit-*)
})

app.use(limiter)
app.use(express.json())
if (process.env.CI !== 'true') {
  app.use(morgan('dev'))
}

app.get('/', (req, res) => {
  res.send('Infrações CTB!\nGET /infracoes - Lista todas as infrações disponíveis no CTB.\nGET /infracoes/:artigo - Retorna os dados da infração com base no número do artigo.\nGET /infracoes/codigo/:codigo - Retorna a infração com base no código RENAINF.')
})

app.use('/infracoes', infracaoRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default app