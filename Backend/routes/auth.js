const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");


//Register
router.post("/register", async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;
    try {

        // generting hash
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // Creating new user
        const user = new User({
            username: username,
            email: email,
            password: hashPassword
        });

        //saving user
        await user.save();
        res.status(200).json( user);
    } catch (error) {
        res.status(401).send("Internal server error");
        console.log(error.message);
    }

})

// Login API 
router.post("/login",async (req, res)=>{
   const {email, password} = req.body;
   try{
       const user= await User.findOne({email:email});
       if(!user){
        return res.status(404).send("User not found")
       }
       const validPassword=await bcrypt.compare(password, user.password);
       if(!validPassword){
        return res.status(400).send("Enter Correct credentials")
       }
       return res.status(200).json(user);
   }
   catch(error){
        return res.status(401).send(err);
   }
})

module.exports = router;