import Check from "../models/check.model.js";
import RecycleBin from "../models/recycleBin.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transports = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS : true,
  auth: {
      type: 'OAuth2',
      user: 'vautoaii@gmail.com',
      clientId: '1096024481727-uipnbge434i692jmc036lhqa83l52ile.apps.googleusercontent.com',
      clientSecret: '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',
      refreshToken: '1//04L7tAJWbJjyoCgYIARAAGAQSNwF-L9IrRipA58iHn7sSJTwul-ib8KIsM1tVLy4VQFkRQORyiOLHTS_lV7HUiOykCrnPXB2BCa0',
      accessToken: 'ya29.a0AfB_byBRBxXGdxzWRfNiAKX-yGkh3QnYZJxwMZNZxw_pGUaGh_ndRKXP8PaOt95OBv5ltI8Bgx-JGT9FN6UtSD6GZ_1SearAtKzIt_QyUcI2D5cSh5fonM51E1Q_4xqacCgtF2n_hie0Ucvys1C4toitKyYK_3jkpINYaCgYKAZcSARESFQHGX2MiSItDatRIUtyRtwYQ2kl-Zg0171'
  }
});


export const addCheckIn = async (req, res) => {
  try {
    const checkInData = new Check(req.body);
    await sendEmail(req.body.email);
    const savedCheckIn = await checkInData.save(); 
    return res
      .status(201)
      .json({ response: savedCheckIn, message: "Check-In added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("something went wrong please try again");
  }
};

export const sendEmail = async (email) => {
  await transports
    .sendMail({
      to: email,
      from: "vautoaii@gmail.com",
      subject: "Vistor Verification",
      html: ` <div style="text-align:center;border:2px solid black; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; border-radius:10px; padding:50px ;">
      <h1>Someone Is Trying To Meet You</h1>
      <p>Please Confirm Your Availabilty.....</p>
      <button style="padding:10px 20px; border-radius:10px; background:black; color: white; border:none;">OK</button>
      </div>`,
    })
    .then((result) => {
      console.log(result);
      console.log("Email sent successfully");
      // req.session.OTP = otp;
      // res.send("Email Sent");
    })
    .catch((err) => {
      console.log(err);
      console.log("Email sent successfully");
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
