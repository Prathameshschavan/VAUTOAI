import mongoose from "mongoose";
const { Schema } = mongoose;

const checkSchema = new Schema(
  {
    guest: {
      type: String,
      required: true,
    },
    personName: {
      type: String,
      required: true,
    },
    comingFrom: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
      required: false,
    },
    floor: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    meetingWith: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
      required: true,
    },
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: false,
    },
    department: {
      type: String,
      required: true,
    },
    remark: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Check", checkSchema);
