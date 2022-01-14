import React, { useState } from 'react';
import "../../styles/login.css";
import axios from "axios";


const SignUp = () =>{

    const [signUpForm,setsignUpForm] = useState({
        first_name:"",
        surname:"",
        username:"",
        email:"",
        password:"",
    });

    const handleSignUpFormChange = (e) => {
        setsignUpForm({
          ...signUpForm,
          [e.target.name]:e.target.value
        });
    };

    console.log(signUpForm);

    const registerAUser= async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/signup/",{
          username:signUpForm.username,
          password:signUpForm.password,
          email:signUpForm.email,
          first_name:signUpForm.first_name,
          surname:signUpForm.surname
        })
        .then(res => res.data)
        .then(res => console.log(res));
      }

    return(
        <>
            <div className='col-lg-6'>
                <div className='login-wrapper'>
                    <h1 className='title-login'>Login</h1>
                        <form onSubmit={registerAUser}>
                            <div className='form-group'>
                                <label>
                                    <p className='label-login'>Full Name</p>
                                    <input className="form-control" type="text" name="first_name" onChange={handleSignUpFormChange}/>
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <p className='label-login'>Surname</p>
                                    <input className="form-control" type="text" name="surname" onChange={handleSignUpFormChange}/>
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <p className='label-login'>Username</p>
                                    <input className="form-control" type="text" name="username" onChange={handleSignUpFormChange}/>
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <p className='label-login'>Email</p>
                                    <input className="form-control" type="email" name="email" onChange={handleSignUpFormChange}/>
                                </label>
                            </div>
                            <div className='form-group'>
                                <label>
                                    <p className='label-login'>Password</p>
                                    <input className="form-control" type="password" name="password" onChange={handleSignUpFormChange}/>
                                </label>
                            </div>
                            <div className='form-group'>
                                <button className="form-control mt-3" type="submit">Submit</button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )

}

export default SignUp;