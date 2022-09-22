const router=require("express").Router();

router.get("/", (req, res)=>{
    res.send("it is users end points")
})

module.exports=router;
