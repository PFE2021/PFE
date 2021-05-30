require("dotenv").config()

const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const db = require("../models")

module.exports.verifyAdmin = async(user_id,dst_email,fullUrl)=>{
try {
    //make a date 
  let date = new Date()
  //what data in the mail we going to send
  let mail = {
    "id" : user_id,
    "created" : date.toString()
  }
  console.log(mail)
  // make a token with expiration date of 120 second
  const token_mail = jwt.sign(mail,process.env.SECRET_KEY,{
    expiresIn : '5m'
  })
  //the url that admin need to click to verify
  //you need to add the application protocol (http or https)

  let url = fullUrl+"?id="+token_mail

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.NODE_MAILER_USER, // generated ethereal user
      pass: process.env.NODE_MAILER_PASS, // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: `"food maroc" ${process.env.NODE_MAILER_USER}`, // sender address
    to: `${dst_email}`, 
    subject: "verify your email ", // Subject line
    text: "Hello world?", // plain text body
  html: `Click here to verify : ${url} `, // html body
  });
  console.log("we have send this email",info)
} catch (error) {
  return error
}
}


module.exports.Verfied = async(req,res,next)=>{
  try {
    const token = req.query.id
    if(token){

      jwt.verify(token,process.env.SECRET_KEY,async function(err,decoded){
        if(decoded){
            const foundAdmin = await db.User.findById(decoded.id)
            foundAdmin.verified = true
            await foundAdmin.save()
            res.json(foundAdmin)

        }
        else{
            return next({
                status : 401,
                message : "Unauthorized"
            })
        }
      })
  }
}
 catch (error) {
    return next(error)
  }
}