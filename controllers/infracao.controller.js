import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import NodeCache from 'node-cache'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataPath = path.join(__dirname, '../data/infracoes.json')

const cache = new NodeCache({ stdTTL: 300 })

export const getInfracoes = async (req, res) => {
  const cached = cache.get('infracoes')
  if (cached) {
    console.log('✅ Resposta enviada do cache')
    return res.json(cached)
  }

  try {
    const data = await fs.readFile(dataPath, 'utf-8')
    const infracoes = JSON.parse(data)

    cache.set('infracoes', infracoes)
    console.log('📦 Dados salvos no cache')

    res.json(infracoes)
  } catch (err) {
    console.error('Erro ao carregar infrações:', err)
    res.status(500).json({ erro: 'Erro ao carregar as infrações' })
  }
}

export const getInfracaoPorArtigo = async (req, res) => {
  const { artigo } = req.params

  try {
    const data = await fs.readFile(dataPath, 'utf-8')
    const infracoes = JSON.parse(data)
    const infracao = infracoes.find(i => String(i.artigo) === String(artigo))

    if (!infracao) {
      return res.status(404).json({ mensagem: 'Infração não encontrada' })
    }

    res.json(infracao)
  } catch (err) {
    console.error('Erro ao buscar artigo:', err)
    res.status(500).json({ erro: 'Erro ao buscar artigo' })
  }
}