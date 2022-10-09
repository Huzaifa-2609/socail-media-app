import { MoreVert } from '@mui/icons-material'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import "./post.css"
import {format} from "timeago.js"
import {Link} from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext';
const Post = ({post}) => {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false); 
  const [user, setUser] = useState({}); 
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const {user:currentUser} = useContext(AuthContext);

  const likeHandler=()=>{
    try {
        axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
    } catch (error) {
        
    }
   setIsLiked(!isLiked);
   setLike(!isLiked ? like+1: like-1)
  } 

useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id));
}, [currentUser._id, post.likes])  

useEffect(() => {
const fetchUser=async()=>{
    const res= await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data)
    }
    fetchUser();
  }, [post.userId]);
   return (
    post && <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePic? PF+ user.profilePic : PF+"person/default-user.png"} alt="" className="postProfilePic" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={PF+post?.img} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={PF+"reacts/like.png"} onClick={likeHandler} alt="" className="likeIcon" />
                    <img src={PF+"reacts/love.png"} onClick={likeHandler} alt="" className="likeIcon" />
                    <span  className="postLikeCounter">{like} reactions</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post