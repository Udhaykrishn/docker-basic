const express = require("express")
const app = express()
const cors = require("cors");
const PORT = process.env.PORT || 3005

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

app.use(require("./routers/control"))

app.listen(PORT,()=>{
    console.log("Server Started")
})
