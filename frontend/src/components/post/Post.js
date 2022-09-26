import { MoreVert } from '@mui/icons-material'
import React from 'react'
import "./post.css"
const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/4.jpg" alt="" className="postProfilePic" />
                    <span className="postUsername">Huzaifa</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey its my first Post</span>
                <img src="/assets/post/1.jpg" alt="" className="postImg" />
            </div>
            <div className="postBottom"></div>
        </div>
    </div>
  )
}

export default Post