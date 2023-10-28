import Inward from "../models/inwards.model.js";
import Asset from "../models/asset.model.js";
import RecycleBin from "../models/recycleBin.js";

export const addInward = async (req, res) => {
  try {
    const { assetType,productDetail} = req.body;
    delete req.body.assetEntry;
    delete req.body.productDetails; 
    productDetail.map(async(product)=>{
      const inwardData = new Inward({...req.body, productName: product.productName, quantity: product.quantity});
      const savedInward = await inwardData.save();
    })

    if (assetType== "Asset") {
      const { type, buyingDate, invoicePhoto } =
        req.body;

        productDetail.map(async(product)=>{
          const assetData = new Asset({type:type , buyingDate:buyingDate, invoicePhoto:invoicePhoto,productName: product.productName, quantity: product.quantity});
          const savedAsset = await assetData.save();
        })
    }

    return res.status(201).json({
      message: "Inward added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};


export const getAllInwards = async (req, res) => {
  const q = req.query;
  try {
    let allInward = [];
    if (q.sort) {
      allInward = await Inward.find().sort({
        inwardTime: `${q.sort == "asc" ? 1 : -1}`,
      });
    } else {
      allInward = await Inward.find().sort({inwardTime:-1});
    }
    res.status(201).send(allInward);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("something went wrong while getting all the data check in");
  }
};

export const updateInwardIn = async (req, res) => {
  try {
    await Inward.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send("inward updated successfully");
  } catch (error) {
    res
      .status(500)
      .send("something went wrong while updating the inward in inward in");
  }
};

export const deleteInwardIN = async (req, res) => {
  try {
    const inward = await Inward.find({ _id: req.params.id });
    await RecycleBin.create({ path: "inward", item: inward[0] });
    await Inward.findByIdAndDelete(req.params.id);
    res.status(201).send("Inward information is deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while deleting Inward in");
  }
};
