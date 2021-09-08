const express = require("express");
const router = express.Router();
const productController = require("../controller/productcontroller");

router.get("/", productController.getAll);
router.get("/detail/:id", productController.detailProduct);
router.post("/", productController.createProduct);
router.put("/edit/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
