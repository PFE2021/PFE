const db = require("../models")

module.exports.calculate = async(products)=>{

 try{
   //starter price , for example if we are going to add Tawsil fees 
   let Price = 0
   for(el of products){
     console.log(el)
     const instanceProduct = await db.Product.findById(el.id)
     console.log(instanceProduct.Price)
     Price += instanceProduct.Price * el.quantity
     console.log("WE LOOPING : ",Price)
   }
  //  const priceCalculator = products.map(async(el)=>{
  //    //el is the instance item in foundCart.Products or foundOrder.products
  //    // and it will be like this  : 
  //    // {id : "lfdksmld" , quantity : 2}
  //    console.log(el)
  //    const instanceProduct = await db.Product.findById(el.id)
  //    console.log(instanceProduct.Price)
  //    Price += instanceProduct.Price * el.quantity
  //    console.log("WE LOOPING : ",Price)
  //  })
   return {"Price":Price}

 }catch(error){
  return error

 }



}