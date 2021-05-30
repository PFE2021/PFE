const jwt = require("jsonwebtoken")
const db = require("../models")
module.exports.Authentification = async(req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
            if(decoded){
                return next()
            }
            else{
                return next({
                    status : 401,
                    message : "Please Login First !"
                })
            }
    
        })
    }catch(err){
        return next({
            status : 401,
            message : "Please Login First !"
        })
    }

}


module.exports.AuthorizationUser = async(req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]

        jwt.verify(token,process.env.SECRET_KEY,async function(err,decoded){
            if(decoded && decoded.id === req.params.user_id){
                return next()

            }
            else{
                return next({
                    status : 401,
                    message : "Unauthorized"
                })
            }
    
        })
    }catch(err){
        return next({
            status : 401,
            message : "Unauthorized"
        })
    }

}


module.exports.AuthorizationRole = (role)=>{
  return function async(req,res,next){
    try {
      const token = req.headers.authorization.split(" ")[1]
      jwt.verify(token,process.env.SECRET_KEY,async function(err,decoded){
        if(decoded && decoded.id === req.params.user_id){
          const foundUser = await db.User.findById(req.params.user_id)
          if(foundUser.role === decoded.role){
            if(foundUser.role == role || foundUser.role == "admin"){
                if(foundUser.verified == true ){
                  return next()
                }else{
                  return next({
                    status : 403,
                    message : "You don't have access to do this !!"
                  })
                }
            }else{
              return next({
                status : 403,
                message : "You don't have access to do this !!"
              })
            }
          }else{
            return next({
              status : 403,
              message : "You tried to play with the token !!"
            })
          }
        }else {
          return next({
            status : 401,
            message : "UnAuthorized"
          })
        }
      })
      
    } catch (error) {
      return next({
        status : 403,
        message : "You don't have access to do this !!"
      }) 
    }
  }
  
}