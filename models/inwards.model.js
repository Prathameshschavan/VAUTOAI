import mongoose from "mongoose";
const { Schema } = mongoose;

const inwardSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  personName: {
    type: String,
    required: true,
  },
  buyingDate: {
    type: String,
    required: false
  },
  comingFrom: {
    type: String,
    required: true,
  },
  invoicePhoto: {
    type: String,
    required: true,
  },
  invoiceBillNo: {
    type: String,
    required: false,
  },
  productDetail:{
     type: [{}],
     required:true
  },
  broughtBy: {
    type: String,
    required: false,
  },
  receivedBy: {
    type: String,
    required: true,
  },
  materialdesc: {
    type: String,
    required: false,
  },
  productImage: {
    type: String,
    required: true,
  },
  orderedBy: {
    type: String,
    required: false,
  },
  returnDate:{
    type: String,
    required: false,
  },
  sendBy:{
    type: String,
    required: false,
  },
  gatePassNo:{
    type: String,
    required: false,
  },
  remark:{
    type: String,
    required: false,
  } 
},{
  timestamps:true
});

export default mongoose.model("Inwards", inwardSchema)