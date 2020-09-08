import React, { useState } from "react";
import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Button } from "@material-ui/core/";

import * as firebase from "firebase/app"
import "firebase/auth";

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
        props.setIsSignedIn(true)
       )
      })
      .catch(err=>console.log(err))
    }
  return (
    <div style={{marginBottom:"20px"}}>
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
    </div>
  );
};

export default Signin;
