import express from 'express'
import { getInfracoes, getInfracaoPorCodigo } from '../controllers/infracao.controller.js'

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
 * /infracoes/{codigo}:
 *   get:
 *     summary: Retorna uma infração específica por código
 *     parameters:
 *       - in: path
 *         name: codigo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Infração encontrada
 *       404:
 *         description: Infração não encontrada
 */
router.get('/:codigo', getInfracaoPorCodigo)

export default router