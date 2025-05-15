import { Router } from 'express'
import {
  getSuppliers,
  createSupplier,
  getSupplierById,
  updateSupplier,
  deleteSupplier
} from '../controllers/supplier.controller'

const router = Router()

router.get('/', getSuppliers)
router.post('/', createSupplier)
router.get('/:id', getSupplierById)
router.put('/:id', updateSupplier)
router.delete('/:id', deleteSupplier)

export default router
