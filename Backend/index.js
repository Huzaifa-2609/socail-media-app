const express= require("express");
const app= express();
const dotenv= require("dotenv");
const helmet= require("helmet");
const morgan= require("morgan");
const connectToMongo = require("./db");
const cors= require("cors");
const multer= require("multer")
const path= require("path");

dotenv.config();
connectToMongo();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"))
app.use(cors())


app.use("/images", express.static(path.join(__dirname, "public/images")))
//routes
app.use("/api/users", require("./routes/users"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/posts", require("./routes/post"))



const storage= multer.diskStorage({
    destination:(req,file, cb)=>{
        cb(null, "public/images")
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname)
    }
})

const upload= multer({storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
    try {
        return res.status(200).json("file uploaded successfully");
    } catch (error) {
        console.log(error)
    }
} )

app.get("/", (req,res)=>{
    res.send("welcome to home page");
})


app.listen(3001, ()=>{
    console.log("app is running on port localhost:"+ 3001);
})