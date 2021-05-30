const mongoose = require("mongoose");
mongoose.set("debug",true);
// So we can use async and promises instead of callback function
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost/foodmaroc",{
    keepAlive : true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});



module.exports.User = require("./user")
module.exports.Product = require("./product")
module.exports.Order = require("./order")
module.exports.Cart = require("./cart")