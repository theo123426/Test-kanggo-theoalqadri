const express = require("express");
const route = express.Router();
const transactionController = require("../controller/transactionController");

route.get("/", transactionController.getAll);
route.get("/:id", transactionController.detailtransaction);

module.exports = route;
