require("dotenv").config()

// Declaring Variables and requiring modules
const express = require("express");
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser")
const chalk = require("chalk")
const PORT = 3001
const session = require("express-session")
app.set('trust proxy', 1)

const adminRoutes = require("./routes/admin/adminRoutes")
const allRoutes = require("./routes/All/allRoutes")
const clientRoutes = require("./routes/client/clientRoutes")
const Error_Handler = require("./handlers/error_handler");
const { AuthorizationUser,Authentification,AuthorizationRole } = require("./middleware/Auth");
const {Verfied} = require("./helpers/verify")
// Middlewere 
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const sess = {
    secret : process.env.SECRET_KEY_SESSION,
    cookie : {}
}
app.use(session(sess))
//Start of All Routes 
    ////routes for the Admin
app.use("/api/admin/:user_id",Authentification,AuthorizationUser,AuthorizationRole("admin"),adminRoutes)
    ////routes for client
app.use("/api/user/:user_id",Authentification,AuthorizationUser,AuthorizationRole("client"),clientRoutes)
    ////routes for All
app.use("/api",allRoutes)
//End of All Routes
app.get("/api/verification",Verfied)
// return Error if the Route is not found !!!

app.use((req,res,next)=>{
    let err = new Error("Route Not Found !!")
    err.status = 404
    return next(err)
})


app.use(Error_Handler)

app.listen(PORT,()=>{
    console.log(chalk.yellow.bgBlack(`Server is Running in Port ${PORT}`))
})