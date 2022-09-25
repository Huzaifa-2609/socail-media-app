import { Bookmark, EmojiEvents, Groups, Message, OndemandVideo, QuestionAnswer, RssFeed, Work } from '@mui/icons-material'
import React from 'react'
import "./sidebar.css"
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
            <li>  
              <Message className='sidebaricon'/>
              <span className="sidebarListItemText">
                Chats
              </span>
            </li>
            <li> 
              <OndemandVideo/>
              <span className="sidebarListItemText">
                Videos
              </span>
            </li> 
            <li> 
            <Groups/>
              <span className="sidebarListItemText">
                Groups
              </span>
            </li> 
            <li> 
            <QuestionAnswer/>
              <span className="sidebarListItemText">
                Questions
              </span>
            </li> 
            <li> 
            <Bookmark/>
              <span className="sidebarListItemText">
                Bookmarks
              </span>
            </li> 
            <li> 
            <Work/>
              <span className="sidebarListItemText">
                Jobs
              </span>
            </li> 
            <li> 
            <EmojiEvents/>
              <span className="sidebarListItemText">
                Event
              </span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Sidebar