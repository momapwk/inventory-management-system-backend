import { Document, Types } from 'mongoose'

export interface ISaleItem extends Document {
  sale: Types.ObjectId;
  product: Types.ObjectId;
  quantity: number;
  price: number;
}
