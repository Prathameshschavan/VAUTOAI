import mongoose from "mongoose";

const headDetailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    number: {
        type: String,
        required: false,
      },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("HeadDetails", headDetailSchema);
