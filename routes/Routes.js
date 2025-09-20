const express = require("express");
const router = express.Router();

const postRoute = require("../controllers/postRoute");
const getRoute = require("../controllers/getRoute");
const putRoute = require("../controllers/putRoute");
const deleteRoute = require("../controllers/deleteRoute");
const patchRoute = require("../controllers/patchRoute");

router.post("/postRoute", postRoute);
router.get("/getRoute", getRoute);
router.put("/putRoute/:id" , putRoute);
router.delete("/deleteRoute/:id" , deleteRoute);
router.patch("/patchRoute/:id" , patchRoute);

module.exports = router;