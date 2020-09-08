import React, { useState } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import { Button } from '@material-ui/core';


const Auth = () => {
    const [isSignedIn,setIsSignedIn]=useState(false)
    const [created, setCreated]=useState(false)

    const handleCreate=()=>{
        setIsSignedIn(true)
        setCreated(true)
    }

   
    return (
        <div>
            {
                !isSignedIn && <Signin setIsSignedIn={setIsSignedIn} ></Signin>
                
            }

           

            {
                created ? <Signup></Signup>
                :  <Button variant="contained" style={{backgroundColor:"green", color:"white", textAlign:"center", display:"block", margin:"auto"}} onClick={handleCreate}>Create new account</Button>
            }
        </div>
    );
};

export default Auth;