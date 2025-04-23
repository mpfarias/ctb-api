import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataPath = path.join(__dirname, '../data/infracoes.json')

export const getInfracoes = async (req, res) => {
  const data = await fs.readFile(dataPath, 'utf-8')
  const infracoes = JSON.parse(data)
  res.json(infracoes)
}

export const getInfracaoPorCodigo = async (req, res) => {
  const { codigo } = req.params
  const data = await fs.readFile(dataPath, 'utf-8')
  const infracoes = JSON.parse(data)
  const infracao = infracoes.find(i => i.codigo === codigo)

  if (!infracao) {
    return res.status(404).json({ mensagem: 'Infração não encontrada' })
  }

  res.json(infracao)
}