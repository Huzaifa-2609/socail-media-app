import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

const Profile = () => {
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
                src="/assets/post/11.jpg"
                alt=""
              />
              <img className="profileUserImg" src="/assets/post/4.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Huzaifa Aslam</h4>
              <span className="profileInfoDesc">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
