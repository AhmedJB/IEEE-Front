import React, { useState } from "react";
import Login from "../components/AuthForms/Login";
import Register from "../components/AuthForms/Register";

import "../Auth.css"

function Auth(props) {

    const [Tab,setTab] = useState('login'); 

    function handleTabChange(e){
        let val = e.target.id;
        setTab(val);
    }


  const template = (
    <div id="auth-container">
      <div className="circle1" />
      <div className="circle2" />
      <div id="blur-layer" />
      <div id="content-layer">
        <div id="form">
          <div className="form-header">
            <button onClick={handleTabChange} id='login' className={Tab == 'login' ? "tab active" : "tab"}  >Login</button>
            <button onClick={handleTabChange} id='register' className={Tab == 'register' ? "tab active" : "tab"}>Register</button>
          </div>
          <div className="form-body">
            {
                Tab == "login"?
                <Login />
                : 
                <Register />
            }
          </div>
          <div className="form-footer">
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );

  return template;
}

export default Auth;
