import React, { createContext, useState } from "react";
import './App.css'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Details from "./Components/Details/Details";
import Home from "./Components/Home/Home";
import Appbar from "./Components/Appbar/Appbar";

import NotFound from "./Components/NotFound/NotFound";
import Signup from "./Components/Auth/Signup";
import {Auth} from "./Components/Auth/Auth";
import Signin from "./Components/Auth/Signin";
export const MyContext=createContext()
function App() {
  const [isSignedIn,setIsSignedIn]=useState(false)
  const [created, setCreated]=useState(false)
  return (
    <MyContext.Provider value={[isSignedIn,setIsSignedIn,created, setCreated]}>
    <Router>
      <Appbar></Appbar>
      
      <Switch>
      <Route exact path="/auth">
        <Auth></Auth>
      </Route>
      <Route exact path="/signin">
        <Signin></Signin>
      </Route>
      <Route exact path="/post">
        <Home></Home>
      </Route>

      <Route exact path="/post/:id">
        <Details></Details>
      </Route>

      <Route exact path="/">
        {
          isSignedIn ? <Home></Home>
          : <Auth></Auth>
        }
      </Route>

      <Route path="*">
        <NotFound></NotFound>
      </Route>

    </Switch>
    
    
    </Router>
    </MyContext.Provider>

  );
}

export default App;

//Project Owner : https://github.com/masudrana08