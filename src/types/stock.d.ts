import { Document, Types } from 'mongoose'

export interface IStock extends Document {
  product: Types.ObjectId
  quantity: number
  warehouse: {
    name: string
    location: string
    capacity: number
  }
}
