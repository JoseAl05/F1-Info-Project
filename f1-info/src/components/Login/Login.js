import React, { useState } from 'react';
import "../../styles/login.css";
import logo from '../../images/f1logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



const Login = () =>{

    let navigate = useNavigate();

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

    const loginAUser = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:5000/api/signin/",{
            username:username.username,
            password:password.password,
        })
        .then(res => {
            console.log(res.status);
            if(res.status === 200){
                toast.success("Success Notification !", {
                    position: toast.POSITION.TOP_CENTER
                });
                setTimeout(() => navigate('/'), 2001);
                return res.data
            }
        })
        .then(res => {
            if(res.accessToken){
                localStorage.setItem("user",JSON.stringify(res));
            }
            return res.data;
        })
        .catch(err => {
            toast.error("Error Notification !", {
                position: toast.POSITION.TOP_RIGHT
            });
            setTimeout(() => window.location.reload(false), 2001);
            return err;
        })
    }


    return(
        <>
            <section className='login-background'>
                <ToastContainer autoClose={2000}/>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='login-wrapper'>
                            <h1 className='title-login'>Login</h1>
                            <form onSubmit={loginAUser}>
                                <div className='form-group'>
                                    <label>
                                        <p className='label-login'>Username</p>
                                        <input className="form-control" type="text" name="username" placeholder='Enter your Username' onChange={handleUsernameChange}/>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <label>
                                        <p className='label-login'>Password</p>
                                        <input className="form-control" type="password" name="password" placeholder='Entero your Password' onChange={handlePasswordChange}/>
                                    </label>
                                </div>
                                <div className='form-group'>
                                    <button className="btn btn-danger form-control mt-3" type="submit" id="btn-submit-login">Login!</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='eslogan-content'>
                            <div className='logo-wrapper'>
                                <img src={logo} className="logo-login" alt='logo'/>
                            </div>
                            <p>Be ready to know all about F1.!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Login;