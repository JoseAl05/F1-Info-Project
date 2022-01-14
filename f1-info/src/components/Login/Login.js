import React, { useState } from 'react';
import "../../styles/login.css";
import logo from '../../images/f1logo.png';


const Login = () =>{

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername({
          ...username,
          [e.target.name]:e.target.value
        });
    };


    const handlePasswordChange = (e) => {
        setPassword({
            ...password,
            [e.target.name]:e.target.value
        });
    };

    console.log(username);

    return(
        <>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='login-wrapper'>
                        <h1 className='title-login'>Login</h1>
                            <form>
                                <div className='form-group'>
                                    <label>
                                        <p className='label-login'>Username</p>
                                        <input className="form-control" type="text" name="username" onChange={handleUsernameChange}/>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <label>
                                        <p className='label-login'>Password</p>
                                        <input className="form-control" type="password" name="password" onChange={handlePasswordChange}/>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <button className="form-control mt-3" type="submit">Submit</button>
                                </div>
                            </form>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='eslogan-content'>
                        <div className='logo-wrapper'>
                            <img src={logo} className="logo-login" />
                        </div>
                        <p>Be ready to know all about F1.!</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;