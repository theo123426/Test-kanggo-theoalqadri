const express = require("express");
const route = express.Router();
const pembayaranController = require("../controller/pembayaranController");

route.get("/", pembayaranController.getAll);
route.get("/:id", pembayaranController.detailpembayaran);

module.exports = route;
