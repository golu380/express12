console.log("hii from index file")

const exprees = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const User = require("./Models/User.js")

const app = exprees()

dotenv.config()
app.use(exprees.json())



app.post('/register',async (req,res)=>{
    console.log(req.body)

    try{
        const {email, age,name} = req.body;

        const newuser = new User({name,age,email})

        await newuser.save()
        res.status(201).send({
            message:"user created scucesfuull..",
            user:newuser
        })
     

    }catch(err){
        console.log(err)
    }
    

   
})


const port = process.env.PORT
console.log(port)
const mongourl = process.env.MONGO_URI
console.log(mongourl)

mongoose.connect(mongourl).then(()=>{
    console.log("database connected successfully!")
}).catch((err)=>{
    console.log("database could not connect",err)
})


app.listen(port, ()=>{
    console.log("hi from server")
})