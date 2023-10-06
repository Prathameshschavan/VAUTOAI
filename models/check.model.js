import mongoose from "mongoose";
const { Schema } = mongoose;

const checkSchema = new Schema(
  {
    guest: {
      type: String,
      required: false,
    },
    personName: {
      type: String,
      required: false,
    },
    comingFrom: {
      type: String,
      required: false,
    },
    purpose: {
      type: String,
      required: false,
    },
    floor: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    meetingWith: {
      type: String,
      required: false,
    },
    contactNo: {
      type: Number,
      required: false,
    },
    checkIn: {
      type: String,
      required: false,
    },
    checkOut: {
      type: String,
      required: false,
    },
    department: {
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

export default mongoose.model("Check", checkSchema);
