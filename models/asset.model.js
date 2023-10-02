import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: false,
  },
  staffName: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: false,
  },
  floor: {
    type: String,
    required: false,
  },
  tags: {
    type: [String],
    required: false,
  },
  returnDate: {
    type: String,
    required: false,
  },
  buyingDate: {
    type: String,
    required: false,
  },
  expiryDate: {
    type: String,
    required: false,
  },
  invoicePhoto: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    required: false,
  },
  qrDetails: {
    type: String,
    required: false,
  },
},{
  timestamps:true
});

export default mongoose.model("Asset", assetSchema);
