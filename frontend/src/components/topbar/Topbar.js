import React, { useContext } from 'react'
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import { Person, Chat, Notifications } from '@mui/icons-material'
import {Link} from "react-router-dom"
import { AuthContext } from '../../Context/AuthContext';

const Topbar = () => {
    const {user}= useContext(AuthContext);
    const PF= process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <Link to="/">
            <a className="logo">HS-book </a>
            </Link>
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
        <Link to ={ "/profile/"+user.username}>
        <img src={user.profilePicture?PF+user.profilePicture : PF+"/person/default-user.png"} alt="profile" className="topbarImage" />
        </Link>
        </div>
    </div>
  )
}

export default Topbar