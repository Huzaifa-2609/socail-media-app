import React from 'react'

const Online = ({user}) => {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
        <li className="rightbarFriend">
              <div className="rightbarProfilePicContainer">
                <img className='rightbarProfileImg' src={PF+user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarOnlineName">{user.username}</div>
        </li>
  )
}

export default Online