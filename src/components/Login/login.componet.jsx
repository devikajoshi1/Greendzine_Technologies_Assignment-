import React from "react";
import Grp from '../../assets/Group 3@2x.png';
import { Link } from 'react-router-dom';
import '../Login/login.styles.css';
const Login = () =>{
    return(
        <div className="container">
            <div >
                <div className="hero-section">
                    <img src={Grp} width={90} height={90}/>
                    <h1>#We are Electric</h1>
                </div>
                <div className="form-container">
                    <input  type='text' placeholder='E-mail' /><br/>
                    <input type="text" placeholder='Password' />
                </div>
                <div className="button-container">
                <Link to='/home' className='login' ><button>Login</button></Link>
                    
                </div>
                <div className="frgtpassword">
                    <h1>Forgot Password?</h1>
                </div>
            </div>
        </div>
    )
}

export default Login;