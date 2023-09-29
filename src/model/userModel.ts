import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface UserSchemaEntity {
  name: string;
  image: string;
  age: number;
  gender: string;
  mobileNo: string;
  billNo: string;
}

const userSchema = new Schema<UserSchemaEntity>(
  {
    name: { type: String, required: true },
    image: { type: String },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    mobileNo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Users ||
  mongoose.model<UserSchemaEntity>("Users", userSchema);
