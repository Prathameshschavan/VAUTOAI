import Outward from "../models/outward.model.js";
import Asset from "../models/asset.model.js";
export const addOutward = async (req, res) => {
  try {
    const { assetId } = req.body;
    delete req.body._id;
    const outwardData = new Outward(req.body);
    const savedOutward = await outwardData.save();
    let asset = await Asset.findOne({ _id: assetId });
    if(asset){
        console.log(asset);
        await Asset.findOneAndDelete({_id: assetId});
    }
    return res.status(201).json({
      response: savedOutward,
      message: "outward added successfully",
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("something went wrong please try again");
  }
};

export const getOutward = async (req, res) => {
  try {
    const outwards = await Outward.find();
    return res.status(201).json({
      response: outwards,
      message: "Here are your outwards",
    });
  } catch (error) {
    console.log(error)
    res.status(500).send("something went wrong please try again");
  }
};
