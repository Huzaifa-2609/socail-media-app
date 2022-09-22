const mongoose= require("mongoose");
const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:5
    },
    profilePic:
    {
        type: String,
        default:"",
    },
    coverPic:
    {
        type: String,
        default:"",
    },
    followers:{
        type:Array,
        default:[],
    },
    followings:{
        type:Array,
        default:[],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},
{timestamps:true}
)
const user= mongoose.model("User", UserSchema)
module.exports=user;