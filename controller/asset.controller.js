import Asset from "../models/asset.model.js";
import RecycleBin from "../models/recycleBin.js";

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
    const updatedAsset = await Asset.findOneAndUpdate({id:req.params.id},req.body); 
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
  const q = req.query;
  try {
    let allAsset = [];
    if (q.sort) {
      allAsset = await Asset.find().sort({
        buyingDate: `${q.sort == "asc" ? -1 : 1}`,
      });
    } else {
      allAsset = await Asset.find();
    }
    res.status(201).send(allAsset);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("something went wrong while getting all the data check in");
  }
};

export const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.find({_id:req.params.id});
    await RecycleBin.create({path:"asset",item:asset[0]});
    await Asset.findByIdAndDelete(req.params.id);
    res.status(201).send("Inward information is deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while deleting Inward in");
  }
};