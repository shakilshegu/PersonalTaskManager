import "dotenv/config"

import express from "express";
const app = express();



const PORT = process.env.PORT || 3001

// * middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
   return res.send("hello world");
})

app.listen(PORT,()=> console.log(`Server running on port:${PORT}`));
