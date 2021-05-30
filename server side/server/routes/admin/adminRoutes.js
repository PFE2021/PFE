const express = require("express")
const { getAll} = require("../../handlers/auth")
const {createProduct,deleteProduct,putProduct} = require("../../handlers/product")
const {getCarts} = require("../../handlers/cart")
const { getOrders } = require("../../handlers/order")
const router = express.Router({
  mergeParams : true
})

router.get("/dashboard",getAll)
router.post("/product",createProduct)
router.get("/cart",getCarts)
router.get("/order",getOrders)
router.route("/product/:product_id").delete(deleteProduct).put(putProduct)
module.exports = router