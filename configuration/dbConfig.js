require("dotenv").config();

module.exports = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false, // Disable SSL encryption
    trustServerCertificate: true, // Trust server certificate
  },
  port: parseInt(process.env.DB_PORT, 10),
};
