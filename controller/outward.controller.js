import Outward from "../models/outward.model.js";
import Asset from "../models/asset.model.js";
import RecycleBin from "../models/recycleBin.js";

export const addOutward = async (req, res) => {
  try {
    const { assetId } = req.body;
    delete req.body._id;
    const outwardData = new Outward(req.body);
    const savedOutward = await outwardData.save();
    let asset = await Asset.findOne({ _id: assetId });
    if (asset) {
      console.log(asset);
      await Asset.findOneAndDelete({ _id: assetId });
    }
    return res.status(201).json({
      response: savedOutward,
      message: "outward added successfully",
    });
  } catch (error) {
    console.log(error);
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
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};


export const updateOutward = async (req, res) => {
  try {
    const updatedOutward = await Outward.findOneAndUpdate(
      { id: req.params.id },
      req.body
    );
    return res.status(201).json({
      response: updatedOutward,
      message: "Outward Updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};


export const deleteOutward = async (req, res) => {
  try {
    const outward = await Outward.find({ _id: req.params.id });
    await RecycleBin.create({ path: "outward", item: outward[0] });
    await Outward.findByIdAndDelete(req.params.id);
    res.status(201).send("Outward information is deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong while deleting Outward");
  }
};
