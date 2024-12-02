const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const moduleRoutes = require("./routes/moduleRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import and use module routes
// const hrRoutes = require("./modules/hr/routes/hrRoutes");
// const financeRoutes = require("./modules/finance/routes/financeRoutes");

// app.use("/hr", hrRoutes);
// app.use("/finance", financeRoutes);

// Root endpoint
app.get("/", (req, res) => {
    res.json("Welcome to the ERP system backend!");
  });

// Module routes
app.use("/Module", moduleRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
