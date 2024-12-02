const express = require("express");
const sql = require("mssql");
const dbConfig = require("../configuration/dbConfig");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool
      .request()
      .query("SELECT ModuleName FROM ADM_Module");
    res.json(result.recordset);
  } catch (err) {
    console.error("Database query failed:", err);
    res.status(500).json({ error: "Failed to fetch module names" });
  }
});

module.exports = router;
