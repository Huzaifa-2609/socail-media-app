import React from 'react'

const Online = ({user}) => {
  return (
        <li className="rightbarFriend">
              <div className="rightbarProfilePicContainer">
                <img className='rightbarProfileImg' src={user.profilePicture} alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarOnlineName">{user.username}</div>
        </li>
  )
}

export default Online