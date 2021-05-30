const db = require("../models")
const jwt = require("jsonwebtoken")
const {hashing} = require("../helpers/Hashing")
const { verifyAdmin } = require("../helpers/verify")
const { checkCarts } = require("../helpers/check_cart")



exports.getAll = async(req,res,next)=>{
  try {

    const foundUsers = await db.User.find({})
    res.json(foundUsers)
    
  } catch (error) {
    return next(error)
  }
}



exports.singup = async(req,res,next)=>{
    try
        {   
            const oldUser = await db.User.deleteOne({email : req.body.email})
            const user = await db.User.create(req.body)
            let { id,username,role } = user

            const token = jwt.sign({
                id,
                username,
                role
            },process.env.SECRET_KEY)
            let fullUrl = req.get("host") + "/api/verification"
            console.log(fullUrl)
            verifyAdmin(id,user.email,fullUrl)
            //make a cart if he is a client even if he isn't verified
            //to make sure that every client have a cart rep

            //he have something in the cart 
            let cart;
            if(req.session._id && role == "client"){
                const temp_cart = await db.Cart.findById(req.session._id)
                cart = await db.Cart.create({
                   Products :  temp_cart.Products,
                    Synced : true
                })
                await db.Cart.findByIdAndDelete(temp_cart._id)
            }else{

                cart = await db.Cart.create({Synced : true})

                }

            // he doesn't have anything in the cart 
            user.cart = cart._id
            await user.save()
            req.session["_id"]= cart._id
            console.log(req.session._id)
            return res.status(200).json({
                id,
                username,
                token,
                cart
        })
    }
    catch(err)
        {
            if(err.code === 11000){
                err.message = "Sorry the Email/Username is taken !!"
            }
            return next({status:400,message:err.message})
    }

}

exports.signin = async function(req,res,next){
    try {
        console.log(req.session._id,"this is it ")
        let user = await db.User.findOne({email :req.body.email})
        const isMatch = await user.comparePassword(req.body.password)
        if(isMatch){
            let {id,username,role} = user
            if(role == "admin" || (role =="client" && user.verified == false)){
                user.verified = false
                await user.save()
                let fullUrl = req.get("host") + "/api/verification"; 
                console.log("We have send an email to verify you moderfker")
                verifyAdmin(id,user.email,fullUrl)
            }
            // if user was logged out and added some items to the cart
            // and he want to log in to sync his cart to this new cart 
    
            if(req.session._id && role == "client"){
                const temp_cart = await db.Cart.findById(req.session._id)
                const user_cart = await db.Cart.findById(user.cart)
                //this one check for duplicate items and add the quantity
                const new_cart = checkCarts(temp_cart,user_cart)
                

                user_cart.items = new_cart
                await user_cart.save()




            }
            const token = jwt.sign({
                id,
                username,
                role
            },process.env.SECRET_KEY)
            res.status(200).json({
                id,
                username,
                token
            })
        }
        else {
            return next({
                status:400,
                message:"Invalid Email/Password"
            })
        }
    }catch(err){
        return next({
            status:400,
            message:"Invalid Email/Password"
        })
    }


}

exports.getUser = async (req,res,next)=>{

}
// prefix = /api/Auth/user/:user_id
exports.modifyUser = async(req,res,next)=>{
    try {
        const foundUser = await db.User.findById(req.params.user_id)
        const isMatch = await foundUser.comparePassword(req.body.oldP)
        if(isMatch){

            const change = {}
            if(req.body.username && req.body.username != foundUser.id){
                change["username"] = req.body.username
            }

            if((req.body.newP && req.body.renew) && req.body.newP === req.body.renew) {
                let {password,salt} = await hashing(req.body.newP)
                change["password"] = password
                change["salt"] = salt
            }

            else if (!req.body.newP === req.body.renew) {
                    return next({
                        status:400,
                        message : "passwords does not match !!"
                    })
                }
                let changed = await db.User.findByIdAndUpdate({_id:req.params.user_id},change,{new:true})
                
                res.status(200).json(changed)

            }


        else{
            return next({
                status:400,
                message:"Invalid Password"
            })
        }
        
    } catch (err) {
        return next({
            status:400,
            message:"Invalid Password Big"
        })
    }
}