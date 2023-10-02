import mongoose, { Mongoose, Schema } from "mongoose";

const recycleBinSchema = new Schema({
    path:{
        type:String,
        required:true
    },
    item:{
        type:Object,
        required:true
    }
},{
    timestamps:true
})

export default mongoose.model("RecycleBin", recycleBinSchema);
