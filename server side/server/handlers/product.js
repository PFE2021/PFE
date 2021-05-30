const db = require("../models")
// for admin
exports.getAllProducts = async(req,res,next)=>{
  try {
    const foundProducts = await db.Product.find({})
    res.status(200).json(foundProducts)
} catch (error) {
    return next(error)
}
}
exports.getProduct = async(req,res,next)=>{
  try {
    const foundProduct = await db.Product.findById(req.params.product_id)
    res.status(200).json(foundProduct)
  } catch (error) {
    return next(error)
  }
}

exports.createProduct = async(req,res,next)=>{
  try {
    const newProduct = await db.Product.create(req.body)
    res.status(200).json(newProduct)
    
  } catch (error) {
    return next(error)
  }
}

exports.deleteProduct = async(req,res,next)=>{
  try {
    const foundProduct = await db.Product.findById(req.params.product_id)
    await foundProduct.remove()
    res.status(200).json(foundProduct)
  } catch (error) {
    return next(error)
  }
}
exports.putProduct = async(req,res,next)=>{
  try {
    
    const newProduct = await db.Product.findByIdAndUpdate({_id:req.params.product_id},req.body,{new:true})
    res.status(200).json(newProduct)
    
  } catch (error) {
    return next(error)
  }
}


//for non admin

exports.putProductClient = async(req,res,next)=>{
  try {
    //search for the user in the db , more secure than using the params !!!
    const foundUser = await db.User.findById(req.params.user_id)
    //putting the rate that user enetered in variable
    const userRate = Number(req.body.rate)

    //search for the product in the db
    const foundProduct = await db.Product.findById(req.params.product_id)
    //defining a local variable that we will use to get the index in the Raters array of the object that have the user_id
    //so if the user already rate the Product we will use the index to remove the user object
    //then we will push the new object with the same user_id but with new Urate
    var index;
    const alreadyRateIt = foundProduct.Raters.filter((e,idx)=>{
      if(String(e.user) == String(foundUser._id)){
        //i used the method like this because the filter doesn't stop so with out "if" the index will be wrong
        index = idx
      }
      return String(e.user) == String(foundUser._id)
    
    })
    //we will use this variable to decrement the total rating and the newRate
    // if it new User rating the value will be 0 , if it a user already rated the value will be the old rate
    var oldUserRate =  0
    if(alreadyRateIt.length>0){
      //we used the index to delete the specifc object , because remove can't use an object to delete
      await foundProduct.Raters.remove(foundProduct.Raters[index])
      await foundProduct.save()
      // if the user already rated we will use its old rate
      oldUserRate = alreadyRateIt[0]["Urate"]

    }
    //pusing the new object that have the user_id and the new Urate
    //we pushed it now so when we calc the newRate , the nmbofRates will be the old nmbOfRates + this newOne
    await foundProduct.Raters.push({"user" : foundUser._id,"Urate" : userRate})
    //the idea here is that the Rate = totalrates/nmbrsOfRates
    //when a new user will rate we need to use the old totalrate and increament it with the user rate , rate = totaloldRate + userRate / nmbrsRates
    //when an old user will change his rate , we need to decrement the total rate by the old user Rate then add the new rate of that user , rate = totaloldRate + userRate - oldUserRate /nmbrsRates
    //the oldUserRate variable will be 0 if it new user , will be the old rate if the user already rated it and want to change it
    const theNewRate = (Number(foundProduct.totalRate) -Number(oldUserRate) + userRate )/Number(foundProduct.Raters.length)
    //changing the total rate to new Rating
    foundProduct.totalRate = foundProduct.totalRate - Number(oldUserRate) + userRate
    //changing the fullProduct rate
    foundProduct.rate = theNewRate.toFixed(1)
    await foundProduct.save()
     res.status(200).json(foundProduct)
  } catch (error) {
    return next(error)
  }
}