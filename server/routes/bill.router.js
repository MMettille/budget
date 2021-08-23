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

  /**
 * PUT routes
 */
router.put("/:id", rejectUnauthenticated, (req, res) => {
    // ⬇ This will update this single task
    const sqlText = `UPDATE "bills" SET "bill_name" = $1, "amount" = $2 WHERE id = $3 AND "user_id" = $4;`;
    pool
      .query(sqlText, [
        req.body.bill_name,
        req.body.amount,
        req.body.id,
        req.user.id,
      ])
      // ⬇ Sending back a 'ok' code to the user
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500);
      });
  });

module.exports = router;