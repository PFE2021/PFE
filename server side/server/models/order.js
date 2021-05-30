const mongoose = require("mongoose")
const db = require("./index")
const orderSchema = new mongoose.Schema({
  Products : [
    {
      _id: false,
      id  : String,
      quantity : {
        type : Number,
        default : 1
      }
    
    }],
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  totalPrice : {
    type : Number,
    required : "Something went Wrong in the Total Price"
  },
  state : {
    type : String,
    enum : ["not checked","Working On It","Completed","send it"]
  },
  location : {
    type : String,
    required : true
  }

},{
  timestamps : true
})


const Order = mongoose.model("Order",orderSchema)

module.exports = Order