import React, { useState, useEffect } from 'react';
import Post from "../Post/Post";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


const SocialIcon = (props) => {

    const [post, setPost] = useState({});
    let id=props && props.id
    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
        });
    },[]);

    const socialIcons = {
        width: 600,
        display: "flex",
        justifyContent: "space-between",
      };

      
   
    const [like,setLike]=useState(false)

  
    return (
        <div>
            <Post post={post}>
        <div style={socialIcons}>
          <div style={{cursor:"pointer",display:"flex"}}  onClick={()=>setLike(!like)} >
            <span>
              {
                like ? <ThumbUpAltIcon color="primary" />
                : <ThumbUpAltOutlinedIcon  />
              }
            </span>
            {
              like ? <b  style={{ marginLeft: "5px", color:"blue" }}>Like</b>
              : <b style={{ marginLeft: "5px" }}>Like</b>
            }
          </div>
          <div style={{ display: "flex" }}>
            <ChatBubbleOutlineIcon />
            <b style={{ marginLeft: "5px" }}>Comment</b>
          </div>

          
          <div style={{ marginLeft: "5px", display:"flex" }} >
            <ShareIcon />
            <b>Share</b>
          </div>
     
   

        </div>
      </Post>
        </div>
    );
};

export default SocialIcon;