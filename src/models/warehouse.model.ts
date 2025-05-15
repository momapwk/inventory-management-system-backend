import { Schema, model, Document } from 'mongoose'
import { IWarehouse } from '../types/warehouse'

const WarehouseSchema = new Schema<IWarehouse>({
  name: String,
  location: String,
  capacity: Number,
});

export default model<IWarehouse>('Warehouse', WarehouseSchema);
