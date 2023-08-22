const router = require("express").Router();
const cartController = require("../controllers/cartController");

router.get("/find/:id", cartController.getCart);
router.delete("/:cartItemId", cartController.deleteCartItem);
router.post("/", cartController.addToCart);
router.post("/quantity", cartController.decreaseCartItem);

module.exports = router
