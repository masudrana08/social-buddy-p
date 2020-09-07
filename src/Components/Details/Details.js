import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Comment from "../Comment/Comment";
import authors from "../../Author";

import SendIcon from "@material-ui/icons/Send";
import SocialIcon from "../SocialIcon/SocialIcon";


const Details = () => {

  const { id } = useParams();

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  //start css style part
  const style = {
    outline: "none",

    borderRadius: "30px",
    border: "1px solid lightgray",
    width: "100%",
    height: "40px",
    marginLeft: "10px",
    marginTop: "10px",
    paddingLeft: "20px",
  };
  const imgStyle = {
    width: "50px",
    borderRadius: "50%",
  };
  const commentBox = {
    display: "flex",
    width: "100%",
    marginBottom: "50px",
  };
  const buttonStyle = {
    borderRadius: "25%",
    margin: "10px 10px 0 5px",
    height: "40px",
    color: "gray",
    border: "1px solid lightgray",
    padding: "1px 3px",
  };
  
 //end css style part


  return (
    <div className="container">
      
      <SocialIcon id={id}></SocialIcon>
      
      <div style={commentBox}>
        <img
          style={imgStyle}
          src="https://scontent.fdac4-1.fna.fbcdn.net/v/t1.0-9/c360.0.1080.1080a/s851x315/90003994_115881190019790_6834874765736411136_o.jpg?_nc_cat=104&_nc_sid=da31f3&_nc_eui2=AeG7VmFgGQnqyArCHYO9MwOhOnaFbHvbqVk6doVse9upWSRwv6BMVEwymd8e1ElSZVkSKGueurSdhaCOR9YWIPzd&_nc_ohc=vv5b3sQR-KUAX-Oo_Li&_nc_ht=scontent.fdac4-1.fna&oh=3c69af4890c504a2eb363ff4df68d652&oe=5F7B59A6"
          alt=""
        />
        <input placeholder={`Write a comment...`} style={style}></input>{" "}
        <SendIcon style={buttonStyle} fontSize="large" />
      </div>

      {comments.map((comment, i) => {
        const author = authors[Math.floor(Math.random() * authors.length)];
        return (
          <Comment key={i} comment={comment} author={author}></Comment>
        );
      })}
      
    </div>
  );
};

export default Details;
//Project Owner : https://github.com/masudrana08
