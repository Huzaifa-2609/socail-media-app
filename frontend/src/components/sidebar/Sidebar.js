import { Bookmark,  Groups, Message, OndemandVideo, QuestionAnswer, RssFeed, School, Work } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"
import EventIcon from '@mui/icons-material/Event';
import { Users } from '../../dummyData';
import CloseFriends from '../CloseFriends';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Feed
              </span>
            </li>
            <li className="sidebarListItem"> 
              <Message className='sidebarIcon'/>
              <span className="sidebarListItemText">
                Chats
              </span>
            </li>
            <li className="sidebarListItem">
              <OndemandVideo className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Videos
              </span>
            </li> 
            <li className="sidebarListItem">
            <Groups className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Groups
              </span>
            </li> 
            <li className="sidebarListItem">
            <QuestionAnswer className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Questions
              </span>
            </li> 
            <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Bookmarks
              </span>
            </li> 
            <li className="sidebarListItem">
            <Work className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Jobs
              </span>
            </li> 
            <li className="sidebarListItem">
            <EventIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Event
              </span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon"/>
              <span className="sidebarListItemText">
                Courses
              </span>
            </li>
          </ul>
          <button className="sidebarButton">Show more</button>
          <hr className='sidebarHr'/>
          <ul className="sidebarFriendList">
           {Users.map((user)=>{
            return <CloseFriends user={user} key={user.id}/>
           })}
          </ul>
        </div>
    </div>
  )
}

export default Sidebar