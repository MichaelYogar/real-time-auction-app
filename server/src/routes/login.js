import express from "express";
const bodyParser = require("body-parser");
const router = express.Router();

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  console.log(req.body);
});

export default router;
