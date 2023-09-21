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
