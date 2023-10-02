import mongoose from "mongoose";
const { Schema } = mongoose;

const movementSchema = new Schema(
  {
    personName: {
      type: String,
      required: true,
    },
    workFor: {
      type: String,
      required: true,
    },
    gatePassNo: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    permissionBy: {
      type: String,
      required: true,
    },
    isCheckedOut: {
      type: Boolean,
      required: true,
    },
    outTime: {
      type: String,
      required: true,
    },
    isCheckedIn: {
      type: Boolean,
      required: false,
    },
    inTime: {
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

export default mongoose.model("Movement", movementSchema);
