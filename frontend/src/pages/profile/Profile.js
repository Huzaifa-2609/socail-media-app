import axios from "axios";
import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import { useParams } from "react-router-dom";
const Profile = () => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const {username} = useParams();
  console.log(username)
  
  const [user, setUser] = useState({}); 
  useEffect(() => {
    const fetchUser=async()=>{
        const res= await axios.get("/users?username="+username);
          setUser(res.data)
        }
        fetchUser();
      }, []);
  return (
    <div>
      <Topbar />
      <div className="ProfileContainer">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.CoverPic || PF+"/person/fbdefaultcover.png" }
                alt=""
              />
              <img className="profileUserImg" src={user.profilePic || PF+"/person/default-user.png" } alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileInfoDesc">
                {user.desc}
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="Huzaifa Aslam"/>
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
