const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require("../modules/authentication-middleware");

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const sqlText = `SELECT * FROM "bills" WHERE "user_id" = $1`
  pool.query(sqlText, [req.user.id])
  .then( (result) => {
      res.send(result.rows)
  }).catch((error)=> {
      console.log(`error getting bills`, error)
      res.sendStatus(500)
  })
});

/**
 * POST route
 */
 router.post("/newBill", rejectUnauthenticated, (req, res) => {
     console.log(req.body)
    // ⬇ This will post a task into the taskList table
    const insertNewBill = `
        INSERT INTO "bills" ("bill_name", "amount", "user_id")
        VALUES ($1, $2, $3);`
    pool
      .query(insertNewBill, [req.body.bill_name, req.body.amount, req.user.id])
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  });

module.exports = router;