import {
  EmojiEmotions,
  PermMedia,
  Reply,
  Room,
  ShareSharp,
  VideoCall,
} from "@mui/icons-material";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./share.css";
const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const handleSubmit= async(e)=>{
        e.preventDefault();
        const newPost={
            userId:user._id,
            desc:desc.current.value
        }
        try {
            await axios.post("/posts", newPost)
        } catch (error) {
            
        }
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePic
                ? PF + user.profilePic
                : PF + "/person/default-user.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder={`What's in your mind ${user.username}?`}
            className="shareInput"
          />
        </div>
        <hr className="s9hareHr" />
        <form className="shareBottom" onSubmit={handleSubmit}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareItemIcon" />
              <span className="shareOptionText">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".jpg,.png,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Room htmlColor="green" className="shareItemIcon" />
              <span className="shareOptionText">Locations</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareItemIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
            <div className="shareOption">
              <VideoCall htmlColor="red" className="shareItemIcon" />
              <span className="shareOptionText">Live</span>
            </div>
            <button type="submit" className="shareButton">
              <Reply className="shareItemIcon" />
              <span>Share</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Share;
