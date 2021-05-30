const db = require("../models")

exports.getCarts = async(req,res,next)=>{
  try {
    const foundCarts = await db.Cart.find()
    res.json(foundCarts).status(200)
  } catch (error) {
    return next(error)
  }
 
}
///api/user/:user_id/cart/:cart_id
exports.getCart = async(req,res,next)=>{
try {
  const foundCart = await db.Cart.findById(req.params.cart_id)
  const foundUser = await db.User.findById(req.params.user_id)
  console.log(foundUser.cart,foundCart._id)
  if(String(foundUser.cart) == String(foundCart._id)){
    res.json(foundCart).status(200)

  }else{
    return next({
      status : 401,
      message : "UnAuthorized"
    })
  }
  
} catch (error) {
  return next(error)
}
}
///api/user/:user_id/cart/:cart_id
exports.modifyCart = async(req,res,next)=>{
  //this will be for adding/removing Products
  try {
    const foundCart = await db.Cart.findById(req.params.cart_id)
    const foundUser = await db.User.findById(req.params.user_id)
    if(String(foundUser.cart) == String(foundCart._id)){
            // the incoming data must be an array.
      
      foundCart.Products = req.body.Products
      foundCart.save()
      res.json(foundCart).status(200)
    }else{
      return next({
        status : 401,
        message : "UnAuthorized"
      })
     }
    
  } catch (error) {
    return next(error)
  }
}

///api/user/:user_id/cart/:cart_id
exports.deleteCart = async(req,res,next)=>{
  //we won't delete the cart, just the items on it
  try {
    const foundCart = await db.Cart.findById(req.params.cart_id)
    const foundUser = await db.User.findById(req.params.user_id)
    if(String(foundUser.cart) == String(foundCart._id)){
      foundCart.Products = []
      foundCart.save()
      res.json(foundCart).status(200)
    }else{
      return next({
        status : 401,
        message : "UnAuthorized"
      })
     }
    
  } catch (error) {
    return next(error)
  }
}
