import RecycleBin from "../models/recycleBin.js";
import Check from "../models/check.model.js";
import Inward from "../models/check.model.js";
import movement from "../models/movement.model.js";
import Outward from "../models/outward.model.js";
import Asset from "../models/asset.model.js";

export const getRecycle = async (req, res) => {
  const q = req.query;
  try {
    let allRecycle = [];
    if (q.sort) {
      allRecycle = await RecycleBin.find().sort({
        updatedAt: `${q.sort == "asc" ? -1 : 1}`,
      });
    } else {
      allRecycle = await RecycleBin.find();
    }
    res.status(201).send(allRecycle);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while getting all the data");
  }
};

export const restoreItemFromRecycle = async (req, res) => {
  try {
    const restoredItem = await RecycleBin.findOne({ _id: req.params.id });
    const path = restoredItem.path;
    const data = restoredItem.item;

    if (path === "check") {
      await Check.create(data);
    } else if (path === "asset") {
      await Asset.create(data);
    } else if (path === "inward") {
      await Inward.create(data);
    } else if (path === "movement") {
      await movement.create(data);
    } else if (path === "outward") {
      await Outward.create(data);
    }

    await RecycleBin.findByIdAndDelete({ _id: req.params.id });

    res.status(200).send({ message: "Item Restored Successfully", item: data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("something went wrong while getting the Restored Item Data");
  }
};
