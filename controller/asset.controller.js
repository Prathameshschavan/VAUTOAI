import Asset from "../models/asset.model.js";

export const addAsset = async (req, res) => {
  try {
    const AssetData = new Asset(req.body);
    const savedAsset = await AssetData.save();
    return res.status(201).json({
      response: savedAsset,
      message: "Asset added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};

export const updateAsset = async (req, res) => {
  try {
    const { _id, condition, staffName, department, floor, tags, returnDate} = req.body;
    const updatedAsset = await Asset.findOneAndUpdate({_id:_id},{$set:{condition,staffName,department,floor,tags,returnDate}}); 
    return res.status(201).json({
      response: updatedAsset,
      message: "Asset Updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};

export const getAsset = async (req, res) => {
  try {
    const assets = await Asset.find();
   
    return res.status(201).json({
      response: assets,
      message: "Here are your assets",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};