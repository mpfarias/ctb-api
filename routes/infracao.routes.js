import express from 'express'
import { getInfracoes, getInfracaoPorArtigo } from '../controllers/infracao.controller.js'

const router = express.Router()

/**
 * @swagger
 * /infracoes:
 *   get:
 *     summary: Lista todas as infrações
 *     responses:
 *       200:
 *         description: Lista de infrações
 */

router.get('/', getInfracoes)

/**
 * @swagger
 * /infracoes/{artigo}:
 *   get:
 *     summary: Retorna uma infração específica por artigo
 *     parameters:
 *       - in: path
 *         name: artigo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Infração encontrada
 *       404:
 *         description: Infração não encontrada
 */
router.get('/:artigo', getInfracaoPorArtigo)

export default router