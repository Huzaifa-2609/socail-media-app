import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
const Rightbar = ({ user }) => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/reacts/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Safia Ali</b> and <b>3 others</b> have birthday today.
          </span>
        </div>
        <img src="/assets/post/ad2.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="onlineFreindList">
          {Users.map((user) => {
            return <Online user={user} key={user.id} />;
          })}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarInfoTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoValue">{user.city || "-"}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoValue">{user.from || "-"}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">{user.relationship===1? "Single":user.relationship===2?"Married" :"-"}</span>
          </div>
          <h4 className="rightbarInfoTitle">User Friends</h4>
          <div className="rightbarFollowings">
              <div className="rightbarFollowing">
                <img src={PF+"/person/1.jpg"} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">
                  John Carter
                </span>
              </div>
              <div className="rightbarFollowing">
                <img src={PF+"/person/1.jpg"} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">
                  John Carter
                </span>
              </div>
              <div className="rightbarFollowing">
                <img src={PF+"/person/1.jpg"} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">
                  John Carter
                </span>
              </div>
              <div className="rightbarFollowing">
                <img src={PF+"/person/1.jpg"} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">
                  John Carter
                </span>
              </div>
              <div className="rightbarFollowing">
                <img src={PF+"/person/2.jpg"} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">
                  John Carter
                </span>
              </div>
              <div className="rightbarFollowing">
                <img src={PF+"/person/3.jpg"} alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">
                  John Carter
                </span>
              </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user? <ProfileRightBar />:<HomeRightBar/> }
      </div>
    </div>
  );
};

export default Rightbar;
