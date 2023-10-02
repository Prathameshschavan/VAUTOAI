import mongoose from "mongoose";

const whitelistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Whitelist", whitelistSchema);
