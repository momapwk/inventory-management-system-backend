import { ICategory } from './../types/category.d'
import { Schema, model, Document } from 'mongoose'

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  description: String,
})

export default model<ICategory>('Category', CategorySchema)
