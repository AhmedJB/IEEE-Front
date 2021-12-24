import React,{Fragment} from 'react'



function Login(props){


    return <Fragment>
  <input type="text" className="text-field" id="username" placeholder="Username" />
  <input type="password" className="text-field" id="password" placeholder="Password" />


    </Fragment>



}


export default Login;