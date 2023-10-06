import mongoose from "mongoose";
const { Schema } = mongoose;

const outwardSchema = new Schema(
  {
    type: {
      type: String,
      required: false,
    },
    outDateAndTime: {
      type: String,
      required: false,
    },
    gatePassNo: {
      type: String,
      required: false,
    },
    materialdesc: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
    givenBy: {
      type: String,
      required: false,
    },
    takenBy: {
      type: String,
      required: false,
    },
    productImage: {
      type: String,
      required: false,
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
