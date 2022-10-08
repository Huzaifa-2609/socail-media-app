import React, { useEffect, useState } from 'react'
import Post from '../post/Post';
import Share from '../share/Share';
import "./feed.css";
import axios from "axios"


const Feed = ({username}) => {  
const [post, setPost] = useState([]);


useEffect(() => {
  const fetchData= async ()=>{
      const res = username? await axios.get("/posts/profile/"+username)
      : await axios.get("/posts/timeline/633c5228c7fc200ff65ff430");
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