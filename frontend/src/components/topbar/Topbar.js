import React from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { Person, Chat, Notifications } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">HS-book </span>
        </div>
        <div className="topbarCenter">
            <span className="searchBar">
            <SearchIcon className="searchIcon"/>
            <input type="text" placeholder='Search for friends, post or any video' className="searchInput" />
            </span>
        </div>
        <div className="topbarRight">
        <div className="topbarLinks">
            <div className="topbarLink">Homepage</div>
            <div className="topbarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="iconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="iconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="iconBadge">1</span>
            </div>
        </div>
        <img src="/assets/person/1.jpg" alt="profile" className="topbarImage" />
        </div>
    </div>
  )
}

export default Topbar