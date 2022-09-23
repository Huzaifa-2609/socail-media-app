const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.get("/", (req, res) => {
    res.send("it is users end points")
})

//update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (error) {
                return res.status(500).json("Update your details");
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            });
            return res.status(200).send("Account has been updated");
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    else{
        return res.status(500).send("You can update only your account")
    }
})
//delete user
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).send("Account has been deleted");
        } catch (error) {
            return res.status(500).json(error)
        }
    }
    else{
        return res.status(500).send("You can delete only your account")
    }
})
//get a user
//follow a user
//unfollow a user


module.exports = router;