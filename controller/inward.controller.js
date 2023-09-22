import Inward from "../models/inwards.model.js";
import Asset from "../models/asset.model.js";

export const addInward = async (req, res) => {
  try {
    const {assetEntry} = req.body;
    delete req.body.assetEntry;
    const inwardData = new Inward(req.body);
    const savedInward = await inwardData.save();
    if(assetEntry){
        const  {
           type,
           productName,
           quantity,
           buyingDate,
           invoicePhoto
       } = req.body;
     
       const assetData = new Asset({
           type,
           productName,
           quantity,
           buyingDate,
           invoicePhoto
       });
        await assetData.save();
    }

    return res.status(201).json({
      response: savedInward,
      message: "Inward added successfully",
    });
  } catch (error) {
    res.status(500).send("something went wrong please try again");
  }
};

export const deleteInwardIN = async (req, res) => {
  try {
    await Inward.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.status(201).send("Inward information is deleted");
  } catch (error) {
    res.status(500).send("something went wrong while deleting Inward in");
  }
};
export const getAllInwards = async (req, res) => {
  const q = req.query;

  const filter = {
    ...(q.returnable && { returnable: q.returnable }),
  };

  try {
    const allInwards = await Inward.find(filter);
    // console.log(allCheckIns)
    res.status(201).send(allInwards);
  } catch (error) {
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
