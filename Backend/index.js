const express= require("express");
const app= express();
const dotenv= require("dotenv");
const helmet= require("helmet");
const morgan= require("morgan");
const connectToMongo = require("./db");
const cors= require("cors")

dotenv.config();
connectToMongo();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))
app.use(cors())

//routes
app.use("/api/users", require("./routes/users"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/posts", require("./routes/post"))

app.get("/", (req,res)=>{
    res.send("welcome to home page");
})


app.listen(3001, ()=>{
    console.log("app is running on port localhost:"+ 3001);
})