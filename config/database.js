const { Sequelize } = require("sequelize");
require("dotenv").config();

// Validate environment variables
if (
  !process.env.DB_NAME ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_SERVER
) {
  throw new Error(
    "Missing required environment variables. Check your .env file."
  );
}

// Debug environment variables
console.log("Environment Variables:", {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_SERVER: process.env.DB_SERVER,
  DB_PORT: process.env.DB_PORT || 1433,
});

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_SERVER,
    dialect: "mssql",
    port: process.env.DB_PORT || 1433,
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    },
    logging: console.log, // Enable query logging for debugging
  }
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
})();

module.exports = sequelize;