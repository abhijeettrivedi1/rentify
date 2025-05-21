// models/user.ts
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  image: String,
  role: { type: String, enum: ['owner', 'renter'], default: 'renter' },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
