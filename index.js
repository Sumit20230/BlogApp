const express=require('express');
const app=express();
require("dotenv").config();
;
 const connectDB=require('./config/database');
 const PORt=process.env.PORT;
const router=require("./routes/blog.js");
// app.use(cors);
app.use(express.json());
app.use("/api/v1",router);
app.listen(PORt,(req,res)=>{
    console.log('server is running');
})
app.use(express.json());

// //app.use("/api/v1",blog);
 connectDB();
app.get('/',(req,res)=>{
res.send(`<h1>sumit faang <h1/>`)
})
// const express=require('express');
// const app=express();
// app.listen(3000,()=>{
//     console.log("server is running fine");
// })
// app.get('/',(req,res)=>{
//     return res.send(`<h1>hbhbh gvvjnkbbbgvsumit<h1/>`)
// })