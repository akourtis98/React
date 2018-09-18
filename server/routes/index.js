const express = require("express");
const router = express.Router();
/* GET users. */
router.get("/get", (req, res) => {
  res.json({
    user: {
      name: "hello",
      tpye: "admin",
      age: 20
    }
  })
});

module.exports = router;
