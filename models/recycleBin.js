import mongoose, { Mongoose, Schema } from "mongoose";

const recycleBinSchema = new Schema({
    path:{
        type:String,
        required:false
    },
    item:{
        type:Object,
        required:false
    }
},{
    timestamps:true
})

export default mongoose.model("RecycleBin", recycleBinSchema);
