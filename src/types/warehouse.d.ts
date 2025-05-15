import { Document } from 'mongoose'

export interface IWarehouse extends Document {
  name: string
  location: string
  capacity: number
}