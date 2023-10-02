import Check from "../models/check.model.js";

export const addCheckIn = async (req, res) => {
  try {
    console.log(req.body)
    const checkInData = new Check(req.body);
    const savedCheckIn = await checkInData.save();
    return res
      .status(201)
      .json({ response: savedCheckIn, message: "Check-In added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("something went wrong please try again");
  }
};

export const addCheckOut = async (req, res) => {
  try {
    const { _id, checkOut } = req.body;
    const checkOutData = await Check.findOneAndUpdate(
      { _id },
      { $set: { checkOut: checkOut } }
    );
    checkOutData.checkOut = checkOut;
    return res
      .status(201)
      .json({
        response: checkOutData,
        message: "Check-Out added successfully",
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send("something went wrong please try again");
  }
};

export const deleteCheckIN = async (req, res) => {
  try {
    await Check.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.status(201).send("checkin information is deleted");
  } catch (error) {
    res.status(500).send("something went wrong while deleting check in");
  }
};

export const getAllCheckIns = async (req, res) => {
  const q = req.query;
  try {
    let allCheckIns = [];
    if (q.sort) {
      allCheckIns = await Check.find().sort({
        checkOut: `${q.sort == "asc" ? -1 : 1}`,
      });
    } else {
      allCheckIns = await Check.find();
    }
    res.status(201).send(allCheckIns);
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .send("something went wrong while getting all the data check in");
  }
};

export const updateCheckIn = async (req, res) => {
  try {
    await Check.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send("checkin updated successfully");
  } catch (error) {
    res
      .status(500)
      .send("something went wrong while updating the check in check in");
  }
};
