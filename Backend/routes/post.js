const Post = require("../models/Post");
const User = require("../models/User");
const router = require("express").Router();

//create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);

    } catch (error) {
        return res.status(500).json(error)
    }
})
//update a post
router.put("/:id", async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.updateOne({$set:req.body});
            return res.status(200).send("The post has been updated")
        }else{
            return res.status(403).send("Update only your post"); 
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error) 

    }
  
})
//delete a post
router.delete("/:id", async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id);
        if(post.userId===req.body.userId){
            await post.deleteOne();
            return res.status(200).send("The post has been deleted")
        }else{
            return res.status(403).send("delete only your post"); 
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error) 

    }
  
})
//like a post 
router.put("/:id/like", async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
           await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("the post has been liked");
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("the post has been disliked");
        }
    } catch (error) {
        res.status(500).json(error);
    }

})
//get a post
router.get("/:id", async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id);
        return res.status(200).json(post); 
    } catch (error) {
        res.status(500).json(error);
    }
})
//get timeline posts
router.get("/timeline/all", async(req, res)=>{
    try {
        const currentUser= await User.findById(req.body.userId);
        const userPosts= await Post.find({userId:currentUser._id});
        const friendPosts= await Promise.all(
            currentUser.followings.map((friendId)=>{
                Post.find({userId:friendId})
            })
        )
           return res.status(200).json(userPosts.concat(...friendPosts))
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;