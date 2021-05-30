const mongoose = require("mongoose")
const {hashing,compare} = require("../helpers/Hashing")

//never do unique without required
const userSchema = new mongoose.Schema({
  username : {
    type : String,
    required : "You need to Enter the Username",
    unique : true

  },
  email : {
    type : String,
    required : "You need to Enter the Email !!",
    unique : true
  },
  firstName : {
    type : String,
    required: "You need to Enter the FirstName"
    
  },
  lastName : {
    type : String,
    required: "You need to Enter the lastName"
  },
  nbPhone : {
    type : Number,
  },
  password : {
    type : String,
    required: "You need to Enter the lastName"
  },
  salt : {
    type : String,
  },
  verified : {
    type : Boolean,
    default : false
  },
  Order :[
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Order"
    }
  ]
  ,

  role : {
    type : String,
    enum : ["admin","client","slave"],
    default : "client"
  },
  cart : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Cart"
  }
  
},{
  timestamps : true
})




userSchema.pre("save",async function(next){
  try
      {        
      if (!this.isModified("password")){
          return next()
      }
      const {password,salt} = await hashing(this.password)
      this.password = password
      this.salt = salt
      
      return next()
      }
  catch(err){
          return next({err})
      }    
  
})


userSchema.methods.comparePassword = async function(input_password,next){
  try{        
      let isMatch = compare(input_password,this.salt,this.password)
      return isMatch
  }catch(err){
      return next(err)
  }
}





const User = mongoose.model("User",userSchema)



module.exports = User