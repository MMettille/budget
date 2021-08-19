const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
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
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;