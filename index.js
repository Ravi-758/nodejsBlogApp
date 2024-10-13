const express = require("express");
const app = express();

require("dotenv").config();

const PORT =process.env.PORT || 8000;

app.use(express.json());

const blog  = require("./routes/blog");

app.use("/api/v1", blog);

const connectWithDb = require("./config/database");

connectWithDb();

app.listen(PORT,()=>{
    console.log("app is started at prot 4000");
})

app.get("/",(req,res)=>{
    res.send("this is default route");
})