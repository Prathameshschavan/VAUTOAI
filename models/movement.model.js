import mongoose from "mongoose";
const { Schema } = mongoose;

const movementSchema = new Schema(
  {
    employeeName: {
      type: String,
      required: false,
    },
    workFor: {
      type: String,
      required: false,
    },
    gatePassNo: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    purpose: {
      type: String,
      required: false,
    },
    permissionBy: {
      type: String,
      required: false,
    },
    isCheckedOut: {
      type: Boolean,
      required: false,
    },
    outTime: {
      type: String,
      required: false,
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
    category: {
      type: String,
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Movement", movementSchema);
