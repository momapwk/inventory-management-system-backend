import { Document } from 'mongoose'

export interface ISale extends Document {
  customer: string;
  date: Date;
  totalAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
}
