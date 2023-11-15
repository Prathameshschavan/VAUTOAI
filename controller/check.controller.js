import Check from "../models/check.model.js";
import RecycleBin from "../models/recycleBin.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transports = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cprathamesh94@gmail.com",
    pass: process.env.GOOGLE_PASS,
  },
});

export const addCheckIn = async (req, res) => {
  try {
    console.log(req.body);
    const checkInData = new Check(req.body);
    await sendEmail(req.body.meetingWith);
    const savedCheckIn = await checkInData.save();
    return res.status(201).json({ response: savedCheckIn, message: "Check-In added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("something went wrong please try again");
  }
};

export const sendEmail = async (email) => {
  transports
  .sendMail({
    to: email,
    from: "vautoaii@gmail.com",
    subject: "OTP Verification",
    html:`<div style="text-align:center">
    <h1>SomeOne is trying to meet you</h1>
    <p>Please confirm your availabilty.....</p>
    <button>OK</button>
    </div>`
  })
  .then((result) => {
    console.log(result)
    // req.session.OTP = otp;
    // res.send("Email Sent");
  })
  .catch((err) => {
    console.log(err)
    // res.send("Something wrong Happened")
  });
};

export const addCheckOut = async (req, res) => {
  try {
    const { _id, checkOut } = req.body;
    const checkOutData = await Check.findOneAndUpdate(
      { _id },
      { $set: { checkOut: checkOut } }
    );
    checkOutData.checkOut = checkOut;
    return res.status(201).json({
      response: checkOutData,
      message: "Check-Out added successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("something went wrong please try again");
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
    console.log(error);
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

// Delete

export const deleteCheckIN = async (req, res) => {
  try {
    const check = await Check.find({ _id: req.params.id });
    await RecycleBin.create({ path: "check", item: check[0] });
    await Check.findByIdAndDelete(req.params.id);
    res.status(201).send("Checkin information is deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong while deleting Checkin in");
  }
};
