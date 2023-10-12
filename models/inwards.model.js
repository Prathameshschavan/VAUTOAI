import mongoose from "mongoose";
const { Schema } = mongoose;

const inwardSchema = new Schema(
  {
    type: {
      type: String,
      required: false,
    },
    inwardTime: {
      type: String,
      required: false,
    },
    productName: {
      type: String,
      required: false,
    },
    quantity: {
      type: String,
      required: false,
    },
    personName: {
      type: String,
      required: false,
    },
    buyingDate: {
      type: String,
      required: false,
    },
    comingFrom: {
      type: String,
      required: false,
    },
    invoicePhoto: {
      type: String,
      required: false,
    },
    invoiceBillNo: {
      type: String,
      required: false,
    },
    broughtBy: {
      type: String,
      required: false,
    },
    receivedBy: {
      type: String,
      required: false,
    },
    materialdesc: {
      type: String,
      required: false,
    },
    productImage: {
      type: String,
      required: false,
    },
    orderedBy: {
      type: String,
      required: false,
    },
    returnDate: {
      type: String,
      required: false,
    },
    sendBy: {
      type: String,
      required: false,
    },
    gatePassNo: {
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

export default mongoose.model("Inwards", inwardSchema);
