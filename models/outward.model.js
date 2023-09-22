import mongoose from "mongoose";
const { Schema } = mongoose;

const outwardSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    outDateAndTime: {
      type: String,
      required: true,
    },
    gatePassNo: {
      type: String,
      required: true,
    },
    materialdesc: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: true,
    },
    givenBy: {
      type: String,
      required: true,
    },
    takenBy: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    remark: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Outward", outwardSchema);
