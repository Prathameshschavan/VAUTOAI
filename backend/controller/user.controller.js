import User from "../models/user.model.js";
import Whitelist from "../models/whitelist.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  try {

    let { name, email, password } = req.body;
    let isWhitelist = await Whitelist.findOne({email});
    if(!isWhitelist){
      return res.status(500).send({ message: "This account do not have permission, plz connect administration" });

    }
    let userFlag = await User.findOne({ email });
    if (userFlag) {
      return res.status(500).send({ message: "User already exists." });
    }

    let response = await User.create({
      name,
      email,
      password: hashing(password),
    });

    let user = response.toJSON();
    delete user.password;
    return res.send({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const hashing = (password) => {
  let hashedPassword = bcrypt.hashSync(
    password,
    "$2b$10$1234567890123456789012"
  );
  return hashedPassword;
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User Does Not Exists" });
    }

    let hashedPassword = hashing(password);
    if (hashedPassword !== existingUser.password) {
      return res.status(401).json({ message: "User password does not match" });
    }

    let userResponse = existingUser.toJSON();
    delete userResponse.password;
    let token = generateToken(userResponse);

    return res.status(200).json({
      user: userResponse,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const generateToken = (payload) => {
  let token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

function Verify(token, res) {
  try {
    let user = jwt.verify(token, process.env.JWT_SECRET);
    return user;
  } catch (error) {
    return error;
  }
}
