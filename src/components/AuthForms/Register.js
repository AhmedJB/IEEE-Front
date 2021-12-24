import React , {Fragment} from 'react';



function Register(props){

    return <Fragment>
  <input type="text" className="text-field" id="username" placeholder="Username" />
  <input type="email" className="text-field" id="Email" placeholder="Email" />
  <input type="text" className="text-field" id="Code" placeholder="IEEE membership Code" />
  <input type="password" className="text-field" id="password" placeholder="Password" />
    </Fragment>


}



export default Register;