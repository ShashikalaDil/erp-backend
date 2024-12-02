const sql = require("mssql");
const dbConfig = require("../../configuration/dbConfig");

const fetchEmployees = async () => {
  const pool = await sql.connect(dbConfig);
  const result = await pool.request().query("SELECT * FROM Employees");
  return result.recordset;
};

module.exports = { fetchEmployees };
