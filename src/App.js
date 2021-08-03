import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//react-Router

import {BrowserRouter as Router ,Switch ,Route} from "react-router-dom";
//toast
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase

import firebase from "firebase/app";
import "firebase/auth";

//Components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import {UserContext}  from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from './layout/Header';
import firebaseConfig from "./config/firebaseConfig";
import Welcome from "./pages/welcome";

//init firebase
firebase.initializeApp(firebaseConfig)


const  App = () => {

const [user,setUser] = useState(null);

  return (
    <div>

    <Router>
      <ToastContainer />
        <UserContext.Provider value={{user,setUser}}>
          <Header/>
         <Switch>
         <Route exact path="/" component={Welcome} />
         <Route exact path="/signin" component={Signin} />
         <Route exact path="/signup" component={Signup} />
         <Route exact path="/home" component={Home} />
         <Route exact path="*" component={PageNotFound} />
         </Switch>
         <Footer/>
        </UserContext.Provider>
    </Router>
    </div>

    
  );
}

export default App;
