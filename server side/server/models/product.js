const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

    nameProduct : {
      type : String,
      required : "Put a Name for the Product"
    },
    Price : {
      type : Number,
      required : "Put a Price for the Product"
    },
    img:{
      type : String,
    },
    description : {
      type : String
    }
    ,
    rate : {
      type : Number,
      default : 0
    },
    Raters :[mongoose.Schema.Types.Mixed],
    totalRate : {
      type : Number,
      default : 0
    }
    ,
    category : {
      type : String,
      required : true,
      enum : ["Entrée","Brucshettas","Pattes","Grillades","Desserts","Crêpes","Gauffres","Milkshakes","Boissons","Menu enfant"]
    }
}    ,{
  timestamps : true
}
)

const Product = mongoose.model("Product",productSchema)

module.exports = Product