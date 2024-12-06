const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { aspnet_Membership } = require("../models/aspnet_Membership");
const { aspnet_Users } = require("../models/aspnet_Users");

const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log("Finding user...");
    const user = await aspnet_Users.findOne({
      where: { LoweredUserName: username },
      include: { model: aspnet_Membership },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const membership = user.aspnet_Membership;
    const isValidPassword = bcrypt.compareSync(password, membership.Password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user.UserId }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, userId: user.UserId, username: user.UserName });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { login };
