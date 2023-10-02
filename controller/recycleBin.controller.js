import RecycleBin from "../models/recycleBin.js";

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
      res
        .status(500)
        .send("something went wrong while getting all the data");
    }
  };


  