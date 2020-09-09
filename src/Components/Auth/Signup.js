import React, { useState, useContext} from "react";
import { FormControl, InputLabel, Input, FormHelperText, FormGroup, Button } from "@material-ui/core/";

import * as firebase from "firebase/app"
import "firebase/auth";
import { MyContext } from "../../App";



const Signup = () => {

  const [isSignedIn,setIsSignedIn,created, setCreated]=useContext(MyContext)
    const [email,setEmail]=useState('')
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }

    const [password,setPassword]=useState('')
    const handlePassword=(event)=>{
        setPassword(event.target.value)
    }
    const handleSignup=()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res=>{
          
               setCreated(false)
           
           
        })
        .catch(err=>console.log(err))
    }
  return (
    <div>
      <FormGroup style={{margin:"0 30%"}}>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input onChange={handleEmail} id="my-input" aria-describedby="my-helper-text" value={email} />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
       
      <FormControl>
        <InputLabel htmlFor="my-input">Type password</InputLabel>
        <Input onChange={handlePassword} id="my-input" aria-describedby="my-helper-text" value={password} />
        <FormHelperText id="my-helper-text">
          Your password would be secure.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="my-input">Phone Number</InputLabel>
        <Input  id="my-input" aria-describedby="my-helper-text"  />
        <FormHelperText id="my-helper-text">
          example: 01796956***
        </FormHelperText>
      </FormControl>

      <Button onClick={handleSignup} style={{marginTop:"20px"}} variant="contained" color="primary">Signup</Button>
      </FormGroup>
    </div>
  );
};

export default Signup;