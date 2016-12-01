import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  twitterId: String,
  username: String,
  profilePic: String,
  pins: Array
})

export default mongoose.model('User', userSchema)
