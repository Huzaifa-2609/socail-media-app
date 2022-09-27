import React from 'react'
import "./rightbar.css"
const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="/assets/reacts/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText"><b>Safia Ali</b> and <b>3 others</b> have birthday today.</span>
          </div>
          <img src="/assets/post/ad2.jpg" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="onlineFreindList">
            <li className="rightbarFriend">
              <div className="rightbarProfilePicContainer">
                <img className='rightbarProfileImg' src="assets/person/4.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarOnlineName">Huzaifa</div>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfilePicContainer">
                <img className='rightbarProfileImg' src="assets/person/4.jpg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <div className="rightbarOnlineName">Huzaifa</div>
            </li>
          
          
          </ul>
        </div>
    </div>
  )
}

export default Rightbar