import { MoreVert } from '@mui/icons-material'
import React from 'react'
import "./post.css"
const Post = ({post}) => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/4.jpg" alt="" className="postProfilePic" />
                    <span className="postUsername">Huzaifa Aslam</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post?.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./assets/reacts/like.png" alt="" className="likeIcon" />
                    <img src="./assets/reacts/love.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">{post.like} reactions</span>
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