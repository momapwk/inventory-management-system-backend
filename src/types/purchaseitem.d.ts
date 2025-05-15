import { Document, Types } from 'mongoose'

export interface IPurchaseItem extends Document {
  purchase: Types.ObjectId;
  product: Types.ObjectId;
  quantity: number;
  price: number;
}