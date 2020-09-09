import React, { useState, useContext } from 'react';
import Signup from './Signup';
import Signin from './Signin';
import { Button } from '@material-ui/core';
import { MyContext } from '../../App';


const Auth = () => {
    const [isSignedIn,setIsSignedIn,created, setCreated]=useContext(MyContext)
    

    const handleCreate=()=>{
        setCreated(true)
    }
     
   
    return (
       
            <div>
            {
                !created && 
                    <Signin></Signin>
                     
            }
            {
                created ? <Signup></Signup>
                :  <Button variant="contained" style={{backgroundColor:"green", color:"white", textAlign:"center", display:"block", margin:"auto"}} onClick={handleCreate}>Create new account</Button>
            }
        </div>
       
    );
};

export {Auth};