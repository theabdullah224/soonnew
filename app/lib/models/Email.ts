import mongoose, { Schema, model, models } from 'mongoose';

const emailSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Email = models.Email || model('Email', emailSchema);

export default Email;
