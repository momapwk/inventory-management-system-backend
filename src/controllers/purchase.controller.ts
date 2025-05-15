import { Request, Response } from 'express'
import { isValidObjectId, handleError } from '../utils/utils'
import Purchase from '../models/purchase.model'
import { IPurchase } from '../types/purchase'

// Get all purchases
export const getPurchases = async (_req: Request, res: Response): Promise<void> => {
  try {
    const purchases = await Purchase.find()
      .populate('supplier', 'name') // Optional: populate supplier name
      .lean()
    res.status(200).json(purchases)
  } catch (error) {
    handleError(res, error)
  }
}

// Create a new purchase
export const createPurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const { supplier, date, totalAmount, status } = req.body

    if (!supplier || !isValidObjectId(supplier, res)) return

    const purchase = new Purchase({ supplier, date, totalAmount, status })
    const saved = await purchase.save()

    res.status(201).json(saved)
  } catch (error) {
    handleError(res, error)
  }
}

// Get a purchase by ID
export const getPurchaseById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    if (!isValidObjectId(id, res)) return

    const purchase = await Purchase.findById(id)
      .populate('supplier', 'name')
      .lean()

    if (!purchase) {
      res.status(404).json({ message: 'Purchase not found' })
      return
    }

    res.status(200).json(purchase)
  } catch (error) {
    handleError(res, error)
  }
}

// Update a purchase
export const updatePurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    const { supplier, date, totalAmount, status } = req.body

    if (!isValidObjectId(id, res)) return
    if (supplier && !isValidObjectId(supplier, res)) return

    const updateData: Partial<IPurchase> = {}
    if (supplier) updateData.supplier = supplier
    if (date) updateData.date = date
    if (totalAmount) updateData.totalAmount = totalAmount
    if (status) updateData.status = status

    const updated = await Purchase.findByIdAndUpdate(id, updateData, { new: true }).lean()

    if (!updated) {
      res.status(404).json({ message: 'Purchase not found' })
      return
    }

    res.status(200).json(updated)
  } catch (error) {
    handleError(res, error)
  }
}

// Delete a purchase
export const deletePurchase = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params
    if (!isValidObjectId(id, res)) return

    const deleted = await Purchase.findByIdAndDelete(id).lean()
    if (!deleted) {
      res.status(404).json({ message: 'Purchase not found' })
      return
    }

    res.status(200).json({ message: 'Purchase deleted successfully' })
  } catch (error) {
    handleError(res, error)
  }
}
