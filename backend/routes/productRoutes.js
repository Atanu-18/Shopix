const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const {admin} = require("../middleware/adminMiddleware");
const {getproducts,getProductById,createProduct,updateProduct,deleteProduct} = require("../controllers/productController");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

//all products
router.route("/").get(getproducts).post(protect,admin, upload.single("image"), createProduct);
//single product
router.route("/:id").get(getProductById).put(protect,admin,upload.single("image"), updateProduct).delete(protect,admin,deleteProduct);


module.exports = router;
