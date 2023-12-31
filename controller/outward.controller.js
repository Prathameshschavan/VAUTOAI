import Outward from "../models/outward.model.js";
import Asset from "../models/asset.model.js";
import RecycleBin from "../models/recycleBin.js";

export const addOutward = async (req, res) => {
  try {
    const {productDetail} = req.body;
    delete req.body.productDetails; 
    productDetail.map(async(product)=>{
      console.log(product);
      const outwardData = new Outward({...req.body, productName: product.productName, quantity: product.quantity});
      const savedOutward = await outwardData.save();
    })
    return res.status(201).json({
      message: "outward added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};

export const getOutward = async (req, res) => {
  const q = req.query;
  try {
    let allOutward = [];
    if (q.sort) {
      allOutward = await Outward.find().sort({
        outDateAndTime: `${q.sort == "asc" ? -1 : 1}`,
      });
    } else {
      allOutward = await Outward.find();
    }
    res.status(201).send(allOutward);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};

export const updateOutward = async (req, res) => {
  try {
    await Outward.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send("outward updated successfully");
  } catch (error) {
    res.status(500).send("something went wrong while updating the outward");
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
