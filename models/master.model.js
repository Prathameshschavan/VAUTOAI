import mongoose from "mongoose";

const masterSchema = new mongoose.Schema({
    floor: {
        type: Number,
        required: true,
    },
    departments: {
        type: [Object],
        required: true,
    },
},{
    timestamps: true
})




export default mongoose.model("Master",masterSchema);