import { Router } from 'express'
import {
  getPurchaseItems,
  createPurchaseItem,
  getPurchaseItemById,
  updatePurchaseItem,
  deletePurchaseItem
} from '../controllers/purchaseitems.controller'

const router = Router()

router.get('/', getPurchaseItems)
router.post('/', createPurchaseItem)
router.get('/:id', getPurchaseItemById)
router.patch('/:id', updatePurchaseItem)
router.delete('/:id', deletePurchaseItem)

export default router
