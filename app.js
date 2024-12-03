const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const moduleRoutes = require("./routes/moduleRoutes");
const adminModule = require('./modules/admin/routes/adminRoutes'); // Make sure this path is correct

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.json("Welcome to the ERP system backend!");
});

// Module routes
app.use("/Module", moduleRoutes);
app.use('/api/admin', adminModule); // This should match the path you're using in the API call

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
