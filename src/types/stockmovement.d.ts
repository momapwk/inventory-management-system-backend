import { Document, Types } from "mongoose"

export interface IStockMovement extends Document {
  product: Types.ObjectId;
  source: Types.ObjectId;
  destination: Types.ObjectId;
  quantity: number;
  date: Date;
}