import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../Online/Online'
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
        { Users.map((user)=>{
          return <Online user={user} key={user.id}/>
        })}
          </ul>
        </div>
    </div>
  )
}

export default Rightbar