import React, { useState, useContext } from "react";
import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Button } from "@material-ui/core/";
import facebook from '../../images/facebook.jpg'
import google from '../../images/google.png'
import * as firebase from "firebase/app"
import "firebase/auth";
import { MyContext } from "../../App";
import { withRouter } from "react-router-dom";

const firebaseConfig = {
    apiKey: "AIzaSyBjX8Vkys-imknywMvoFE3gt6d4HxQ-YdI",
    authDomain: "social-buddy-p.firebaseapp.com",
    databaseURL: "https://social-buddy-p.firebaseio.com",
    projectId: "social-buddy-p",
    storageBucket: "social-buddy-p.appspot.com",
    messagingSenderId: "898097591030",
    appId: "1:898097591030:web:710684fd9aadc1688fb2d7"
  };

  firebase.initializeApp(firebaseConfig);

const Signin = (props) => {
  const [errorMessage,setErrorMessage]=useState("")
  const [isSignedIn,setIsSignedIn,created, setCreated]=useContext(MyContext) 
    const [email,setEmail]=useState('')
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }

    const [password,setPassword]=useState('')
    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }
    const handleSignin=()=>{
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res=>{
       return(
        
        props.history.push('/'),
        setIsSignedIn(true)
        
       )
      })
      .catch(err=>{
       setErrorMessage(err)
      })
    }

    const googleAuthBtn=()=>{
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(res=>{
        return(
          props.history.push('/'),
        setIsSignedIn(true)
        )
      })
    }
    const facebookAuthBtn=()=>{
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(res=>{
        return(
          props.history.push('/'),
        setIsSignedIn(true),
        console.log(res)
        )
      })
    }

   
  return (
    <div style={{marginBottom:"20px"}}>
      {
        errorMessage && <h5 style={{color:"red", textAlign:"center"}}> Don't match username and password</h5>
          
      }
      <FormGroup style={{margin:"0 30%"}}>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input onChange={handleEmail} id="my-input" aria-describedby="my-helper-text" value={email} />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
       
      <FormControl>
        <InputLabel htmlFor="my-input">Strong password</InputLabel>
        <Input onChange={handlePassword} id="my-input" aria-describedby="my-helper-text" value={password} />
        <FormHelperText id="my-helper-text">
          Your password would be secure.
        </FormHelperText>
      </FormControl>
      <Button onClick={handleSignin} style={{marginTop:"20px"}} variant="contained" color="primary">Login</Button>
     
      </FormGroup>
      <div style={{textAlign:"center",marginTop:"20px"}}>
        <Button onClick={googleAuthBtn}><img style={{width:"35px", borderRadius:"50%"}} src={google} alt="google"/></Button> 
       
        <Button onClick={facebookAuthBtn}><img style={{width:"25px", borderRadius:"50%",}} src={facebook} alt="facebook"/></Button> 
      </div>
    </div>
  );
};

export default withRouter(Signin)
