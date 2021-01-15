import mongoose from "mongoose";

const UserType = {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
};

export { UserType };
