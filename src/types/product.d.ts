import { Document } from 'mongoose'

export interface IProduct extends Document {
    _id: string
  name: string
  description: string
  sku: string
  price: number
  quantity: number
}
