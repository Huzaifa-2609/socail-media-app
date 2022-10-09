import React, { useContext, useEffect, useState } from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import "./feed.css";
import axios from "axios"
import { AuthContext } from '../../Context/AuthContext';


const Feed = ({username}) => {  
const [post, setPost] = useState([]);
const {user} = useContext(AuthContext);


useEffect(() => {
  const fetchData= async ()=>{
      const res = username? await axios.get("/posts/profile/"+username)
      : await axios.get("/posts/timeline/"+ user._id);
      setPost(res.data)
      console.log(post)
      // console.log(res?.data)
  }
    fetchData();
    console.log(post)
  }, []);
  
  
  return (
    post && (<div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {
         post.map((p)=>{
          return(
             <Post key={p?._id} post={p}/>
          )
         }) 
        }
      </div>
    </div>)
  )
}

export default Feed