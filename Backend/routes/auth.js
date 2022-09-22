const router=require("express").Router();
const User=require("../models/User");


//Register
router.post("/register",async (req, res)=>{
    const {username, email, password}=req.body;
    const user = new User({
        username, email, password
    });
    try {
        await user.save();
        res.status(200).send("User is created successfully");
    } catch (error) {
        res.status(401).send("Internal server error");
        console.log(error.message);
    }

})

module.exports=router;
