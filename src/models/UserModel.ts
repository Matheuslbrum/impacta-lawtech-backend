import mongoose, { Schema, Document } from "mongoose";

export interface IUser {
  name: string;
  email: string;
}

export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IUserModel>("User", UserSchema);
