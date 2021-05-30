const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
  Products : [
    {
      _id: false,
      id  : String,
      quantity : {
        type : Number,
        default : 1
      }
    
    }
  ],
    Synced : {
      type : Boolean,
      default : false
    }
  
})

const Cart =  mongoose.model("Cart",cartSchema)

module.exports = Cart