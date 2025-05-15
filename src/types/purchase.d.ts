import { Document, Types } from 'mongoose'

export interface IPurchase extends Document {
  supplier: Types.ObjectId;
  date: Date;
  totalAmount: number;
  status: 'pending' | 'received' | 'cancelled';
}