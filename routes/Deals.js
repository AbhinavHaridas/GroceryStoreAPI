const express = require("express");
const connection = require("../database");
const router = express.Router();

//Get All deal items
// URL = http://localhost:8000/deals/
router.get("/", (req, res) => {
  connection.query("SELECT * FROM deal_items", (err, results) => {
    res.json(results);
  });
});

//Get all deal types
// URL = http://localhost:8000/deals/get_deal_types
router.get("/get_deal_types", (req, res) => {
  connection.query("SELECT * FROM deal_types", (err, results) => {
    res.json(results);
  });
});

router.get("/get_specific_deal_items", (req, res) => {
  const deal_type_id = req.query.deal_type_id;
  connection.query(
    "SELECT `di`.`image` AS image, `di`.`description` AS description FROM deal_items `di` INNER JOIN deal_types `dt` ON `dt`.`id` = `di`.`deal_type_id` AND `dt`.`id` =" +
      deal_type_id,
    (err, results) => {
      res.json(results);
    }
  );
});



module.exports = router;
