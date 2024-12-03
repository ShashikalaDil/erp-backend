// require("dotenv").config();
// const sql = require("mssql");

// // Connection configuration
// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   server: process.env.DB_SERVER || "10.0.25.106",
//   database: process.env.DB_NAME,
//   options: {
//     encrypt: false,
//     trustServerCertificate: true,
//   },
//   port: parseInt(process.env.DB_PORT, 10) || 1433,
// };

// // Test the connection
// async function testConnection() {
//   console.log("Attempting to connect to server:", config.server);
//   try {
//     const pool = await sql.connect(config);
//     console.log("Connection Successful!");
//     return pool;
//   } catch (error) {
//     console.error("Connection failed:", error);
//     console.error("Error details:", error.message); // Log the error message
//     console.error("Error code:", error.code);
//     throw error;
//   }
// }

// // Exporting config and testConnection function
// module.exports = {
//   config,
//   testConnection,
// };


require("dotenv").config();
const sql = require("mssql");

async function testConnection() {
  const server = process.env.DB_SERVER || '10.0.25.106'; // Fallback for debugging

  console.log("Attempting to connect to server:", server); // Debugging

  try {
    await sql.connect({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: server,
      database: process.env.DB_NAME,
      options: {
        encrypt: false, // Disable SSL for development
        trustServerCertificate: true, // Trust self-signed certs
        enableArithAbort: true, // Helps with certain SQL Server configurations
      },
    });
    console.log("Connection Successful!");
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

testConnection();

// require("dotenv").config();

// module.exports = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   server: process.env.DB_SERVER,
//   database: process.env.DB_NAME,
//   options: {
//     encrypt: false, // Disable SSL encryption
//     trustServerCertificate: true, // Trust server certificate
//   },
//   port: parseInt(process.env.DB_PORT, 10),
// };
