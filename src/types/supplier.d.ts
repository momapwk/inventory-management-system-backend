import { Document } from 'mongoose'

export interface ISupplier extends Document {
  name: string;
  contactInfo: string;
  address: string;
}