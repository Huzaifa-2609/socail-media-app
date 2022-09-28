import React from "react";

const CloseFriends = ({user}) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="userName">{user.username}</span>
      </li>
    </div>
  );
};

export default CloseFriends;
