import express from 'express'
import { createPsicologo, deletePsicologo, getAllPsicologos, getPsicologo, updatePsicologo } from '../controllers/BlogController.js'
const router = express.Router()

router.get('/',getAllPsicologos)
router.get('/:id', getPsicologo)
router.post('/', createPsicologo)
router.put('/:id', updatePsicologo)
router.delete('/:id', deletePsicologo)

export default router
