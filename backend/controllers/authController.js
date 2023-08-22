const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      location: req.body.location,
      password: CryptoJs.AES.encrypt(
        req.body.password,
        process.env.SECRET
      ).toString(),
    });

    try {
      await newUser.save();
      res.status(201).json({ message: "User Created Successfully" });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  },
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json("Wrong email provided");
      }

      const decryptPassword = CryptoJs.AES.decrypt(
        user.password,
        process.env.SECRET
      ).toString(CryptoJs.enc.Utf8);
      if (decryptPassword !== req.body.password) {
        res.status(401).json("Wrong password provided");
      }

      const userToken = jwt.sign(
        {
          user: user.id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );
      const { password, __v, createdAt, updatedAt, ...userData } = user._doc;
      res.status(200).json({ ...userData, toekn: userToken });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
