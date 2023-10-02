import Movement from "../models/movement.model.js";
import RecycleBin from "../models/recycleBin.js";

export const addMovementOut = async (req, res) => {
  try {
    const movementOutData = new Movement(req.body);
    const savedMovementOut = await movementOutData.save();
    return res.status(201).json({
      response: savedMovementOut,
      message: "Movement-Out added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};

export const addMovementIn = async (req, res) => {
  try {
    const { _id, inTime , isCheckedIn} = req.body;
    const movementInData = await Movement.findOneAndUpdate(
      { _id },
      { $set: { inTime: inTime , isCheckedIn: isCheckedIn} }
    );
    movementInData.inTime = inTime;
    movementInData.isCheckedIn = isCheckedIn; 
    return res.status(201).json({
      response: movementInData,
      message: "Movement-Out added successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong please try again");
  }
};

export const getAllMovementIns = async (req, res) => {
  const q = req.query;
  try {
    let allMovements = [];
    if (q.sort) {
      allMovements = await Movement.find().sort({
        outTime: `${q.sort == "asc" ? -1 : 1}`,
      });
    } else {
      allMovements = await Movement.find();
    }
    res.status(201).send(allMovements);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("something went wrong while getting all the data check in");
  }
};
export const updateMovementIn = async (req, res) => {
  try {
    await Movement.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send("Movementin updated successfully");
  } catch (error) {
    res
      .status(500)
      .send("something went wrong while updating the Movement in Movement in");
  }
};

// Delete 
export const deleteMovementIN= async (req, res) => {
  try {
    const movement = await Movement.find({ _id: req.params.id });
    await RecycleBin.create({ path: "movement", item: movement[0] });
    await Movement.findByIdAndDelete(req.params.id);
    res.status(201).send("Movement information is deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while deleting Movement information");
  }
};