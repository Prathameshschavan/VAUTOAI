import Master from "../models/master.model.js";

export const addFloor = async (req, res) => {
  try {
    const { floor } = req.body;
    const isFloorExist = await Master.find({ floor: floor });
    console.log(isFloorExist)
    if (isFloorExist.length) {
      return res.status(500).json({
        message: "Floor Already Exist",
      });
    }
    const newFloor = await Master.create(req.body);

    return res.status(200).json({
      message: "Floor Data Added Successfully",
      response: newFloor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};

export const getFloor = async (req, res) => {
  try {
    const allfloorData = await Master.find();

    return res.status(200).json({
      message: "All Floor Data Sent Successfully",
      response: allfloorData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};
