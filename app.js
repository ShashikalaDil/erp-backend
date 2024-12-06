const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const moduleRoutes = require("./routes/moduleRoutes");
const adminModule = require("./modules/admin/routes/adminRoutes");
const authRoutes = require("./modules/admin/routes/authRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json("Welcome to the ERP system backend!");
});

// Module routes
// app.use("/Module", moduleRoutes);
app.use("/api/admin", adminModule);
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
