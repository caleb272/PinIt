import mongoose from 'mongoose'
const Schema = mongoose.Schema

const pinSchema = new Schema({
  image: String,
  description: String,
  creator: String,
  likes: { type: Array, default: [] }
})

export default mongoose.model('Pin', pinSchema)
