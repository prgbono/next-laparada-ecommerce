import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false }
  },
  {
    // This timestamps option adds createdAt and updatedAt fields
    timestamps: true

    // Mongoose doco https://mongoosejs.com/docs/guide.html#toJSON
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true }
  }
)

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)
export default UserModel
