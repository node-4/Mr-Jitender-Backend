const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
  createWishlist,
  removeFromWishlist,
  myWishlist,
  getProductByCategory
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const upload = require("../middleware/fileUpload");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/by/category/:id").get(getProductByCategory);
router.route("/add/wishlist/:id").post(isAuthenticatedUser, createWishlist);
router
  .route("/remove/wishlist/:id")
  .put(isAuthenticatedUser, removeFromWishlist);
router.route("/wishlist/me").get(isAuthenticatedUser, myWishlist);

router
  .route("/admin/products")
  .get(  getAdminProducts);

router
  .route("/admin/product/new")
  .post(

    upload.array("image"),
    createProduct
  );

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
