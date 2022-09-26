import { EmojiEmotions, Label, PermMedia, Room, VideoCall } from '@mui/icons-material'
import React from 'react'
import "./share.css"
const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/3.jpg" alt="" className="shareProfileImg" />
                <input type="text" placeholder="What's in your mind Huzaifa?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareItemIcon'/>
                        <span className="shareOptionText">Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareItemIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareItemIcon'/>
                        <span className="shareOptionText">Locations</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareItemIcon'/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                    <div  className="shareOption">
                        <VideoCall htmlColor='red' className='shareItemIcon'/>
                        <span className="shareOptionText">
                            Live Video
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share
