const db = require("../models")
const { calculate }= require("../helpers/priceCalculator")

///api/user/:user_id/order
exports.getOrders = async(req,res,next)=>{
  try {
    const foundOrders = await db.Order.find()
    res.json(foundOrders).status(200)
    
  } catch (error) {
    return next(error)
  }
}
// /api/user/:user_id/order/:order_id
exports.getOrder = async(req,res,next)=>{
  const foundOrder = await db.Order.findById(req.params.order_id)
  const foundUser = await db.User.findById(req.params.user_id)
  if(String(foundOrder.user) == String(foundUser._id)){
    res.status(200).json(foundOrder)
  }else {
    return next({
    status:401,
    message : "UnAuthorized"
  })
}

}


// /api/user/:user_id/order/Product/:product_id
exports.createOneOrder = async(req,res,next)=>{
try {
  const foundUser = await db.User.findById(req.params.user_id)
  const foundProduct = await db.Product.findById(req.params.product_id)
  
  const {Price} = await calculate([{id:foundProduct._id,quantity:Number(req.body.quantity)}])

  const newOrder = await db.Order.create({
    Products : [{id:foundProduct._id,quantity:Number(req.body.quantity)}],
    totalPrice : Price,
    state : "not checked",
    location : req.body.location,
    user : foundUser._id
  })
  res.json(newOrder).status(200)
} catch (error) {
  return next(error)
}

}

// /api/user/:user_id/order/cart/:cart_id
exports.createOrderBasedOnCart = async(req,res,next)=>{

  try {
    const foundCart = await db.Cart.findById(req.params.cart_id)
    const foundUser = await db.User.findById(req.params.user_id)
    
  if(String(foundUser.cart) == String(foundCart._id)){
    const newOrder = {
      Products : foundCart.Products,
      user : foundUser._id,
      location : "Marrakech",
      state : "not checked",
    }
    // calculate the price
    let {Price} = await calculate(foundCart.Products)
    newOrder["totalPrice"] = Price
    //Now Create tthe Order
    console.log("we hero",Price)
    const order = await db.Order.create(newOrder)
    console.log(order)
    foundUser.Order.push(order._id)
    await foundUser.save()
    res.status(200).json(order)
  }
  else{
    return next({
      status:401,
      message : "UnAuthorized"
    })
  }
  } catch (error) {
   return next(error) 
  }
  
}

// /api/user/:user_id/order/:order_id
exports.modifyOrder = async(req,res,next)=>{
  try {
    const foundOrder = await db.Order.findById(req.params.order_id)
    const foundUser = await db.User.findById(req.params.user_id)
    if(String(foundUser._id) == String(foundOrder.user)){
      foundOrder.Products = req.body.Products
      const {Price} = await calculate(foundOrder.Products)
      console.log("we here",Price)
      foundOrder.totalPrice = Price
      console.log(foundOrder)
      await foundOrder.save()
      res.json(foundOrder).status(200)
    }
    else{
      return next({
        status:401,
        message : "UnAuthorized"
      })
    }
    
  } catch (error) {
    return next(error)
  }
}
// /api/user/:user_id/order/:order_id
exports.deleteOrder = async(req,res,next)=>{
  try {
    const foundOrder = await db.Order.findById(req.params.order_id)
    const foundUser = await db.User.findById(req.params.user_id)
    if(String(foundOrder.user) == String(foundUser._id) || foundUser.role == ("admin"||"slave")){
      await db.Order.findByIdAndDelete(foundOrder._id)
      res.status(200)

    } else{
      return next({
        status:401,
        message : "UnAuthorized"
      })
    }

  } catch (error) {
    return next(error)
  }
}