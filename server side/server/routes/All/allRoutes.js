const express = require("express")
const { singup,signin} = require("../../handlers/auth")
const {getAllProducts,getProduct} = require("../../handlers/product")
const {getCarts} = require("../../handlers/cart")
const router = express.Router({
  mergeParams : true
})
router.post("/auth/signin",signin)
router.post("/auth/signup",singup)

router.get("/Products",getAllProducts)
router.get("/Products/:product_id",getProduct)
router.get("Carts",getCarts)

module.exports = router