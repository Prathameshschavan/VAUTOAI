import Asset from "../models/asset.model.js";
import RecycleBin from "../models/recycleBin.js";

export const addAsset = async (req, res) => {
  try {
    const {productDetail} = req.body;
    delete req.body.productDetails; 
    productDetail.map(async(product)=>{
      const AssetData = new Asset({...req.body, productName: product.productName, quantity: product.quantity});
      const savedAsset = await AssetData.save();
    })
    return res.status(201).json({
      message: "Asset added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};

export const updateAsset = async (req, res) => {
  try {
    await Asset.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send("asset updated successfully");
  } catch (error) {
    res.status(500).send("something went wrong while updating the asset");
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
    console.log(allAsset);
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
    const asset = await Asset.find({ _id: req.params.id });
    await RecycleBin.create({ path: "asset", item: asset[0] });
    await Asset.findByIdAndDelete(req.params.id);
    res.status(201).send("Asset information is deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while deleting Asset");
  }
};

export const assignAsset = async (req, res) => {
  try {
    const { id, employeeName, description, assignDate } = req.body;
    const asset = await Asset.findOne({ _id: id });
    let len = asset.assignee.length;
    if (len > 0 && asset.assignee[len - 1].returnedDate === "") {
      return res
        .status(500)
        .send(
          "This Asset is Already assigned to somebody. First it need to be returned"
        );
    }

    asset.assignee.push({
      name: employeeName,
      description,
      assignDate,
      returnedDate: "",
    });

    const updatedAsset = await Asset.findByIdAndUpdate({ _id: id }, asset);

    return res
      .status(200)
      .send({ message: "Asset Assigning Successful", asset });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while Assigning Asset");
  }
};

export const returnAssigned = async (req, res) => {
  try {
    const { id, returnedDate } = req.body;
    const asset = await Asset.findOne({ _id: id });
    let len = asset.assignee.length;
    if (len > 0 && asset.assignee[len - 1].returnedDate !== "") {
      return res.status(500).send({
        message: "This Asset is Already returned",
        asset,
      });
    }

    if(returnedDate<= asset.assignee[len-1].assignDate){
      return res.status(500).send({
        message: "returned date is smaller than assign date",
        asset,
      });
    }
    asset.assignee[len-1].returnedDate=returnedDate;


    const updatedAsset = await Asset.findByIdAndUpdate({ _id: id }, asset);
    return res
      .status(200)
      .send({ message: "Asset Returned Successful", asset });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while Returning Asset");
  }
};
