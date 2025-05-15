import { Schema, model } from 'mongoose'
import { IStock } from '../types/stock'

const StockSchema = new Schema<IStock>({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  warehouse: {
    name: String,
    location: String,
    capacity: Number
  }
})

export default model<IStock>('Stock', StockSchema)
