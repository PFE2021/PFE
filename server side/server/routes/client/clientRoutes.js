const express = require("express")
const router = express.Router({
  mergeParams : true
})
const {putProductClient} = require("../../handlers/product")
const {getCart,modifyCart,deleteCart} = require("../../handlers/cart")
const { getOrder,deleteOrder,modifyOrder,createOneOrder,createOrderBasedOnCart } = require("../../handlers/order")
router.route("/product/:product_id").put(putProductClient)

//Cart : 
router.route("/cart/:cart_id").get(getCart).delete(deleteCart).put(modifyCart)

// Order : 
router.post("/order/Product/:product_id",createOneOrder)
router.post("/order/cart/:cart_id",createOrderBasedOnCart)
router.route("/order/:order_id").put(modifyOrder).delete(deleteOrder).get(getOrder)
module.exports = router