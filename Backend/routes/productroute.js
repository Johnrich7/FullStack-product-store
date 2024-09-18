const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/add", productController.addProduct);
router.put("/edit/:id", productController.editProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
