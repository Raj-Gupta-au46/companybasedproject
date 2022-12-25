const express=  require("express")
const mongoose= require("mongoose")
const route= require("../companybasedproject/src/rotuers/routes")

const app= express()

app.use(express.json())

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://rajgupta07082000:0Um5TBcHGam3DxeZ@cluster0.p92r9bx.mongodb.net/rajgupta07082000-DB",{
    useNewUrlParser:true
})

.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err))

app.use("/",route)

app.listen(3000,function(){
    console.log("running on " + 3000)
})