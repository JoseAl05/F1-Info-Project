import React, { useState } from 'react';
import "../../styles/signup.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "../Forms/Input";


const SignUp = () =>{

    const {register, formState:{ errors } ,handleSubmit} = useForm();

    const [signUpForm,setsignUpForm] = useState({
        // first_name:"",
        // surname:"",
        // username:"",
        // email:"",
        // password:"",
    });

    const handleSignUpFormChange = (e) => {
        console.log(e.target);
        setsignUpForm({
          ...signUpForm,
          [e.target.name]:e.target.value
        });
    };

    console.log(signUpForm);

    const registerAUser= async() => {
        // e.preventDefault();
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
            <div className='col-12'>
                <div className='signup-wrapper'>
                    <h1 className='title-signup'>Sign Up!</h1>
                        <form onSubmit={handleSubmit(registerAUser)}>
                            <div className='form-group'>
                                {/* <Input label='Full Names' type='text' name='first_name' placeholder='Enter your names' register={register} required={true} onChange={handleSignUpFormChange}/> */}
                                <label>
                                    <p className='label-signup'>Full Name</p>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="first_name"
                                        {...register('first_name',{
                                            required:true,
                                        })}
                                        placeholder='Enter your names'
                                        onChange={handleSignUpFormChange}
                                    />
                                    <small id="fullNameHelp" className="form-text text-muted">Enter 1st and 2nd name. Example: (Nicolás Rodrigo).</small>
                                    {errors.first_name && <p className='error-validator'>First Names are required!.</p>}
                                </label>
                            </div>
                            <div className='form-group'>
                                {/* <Input label='Surnames' name='surname' type='text' placeholder='Enter your surnames' register={register} required={true} onChange={handleSignUpFormChange}/> */}
                                <label>
                                    <p className='label-signup'>Surname</p>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="surname"
                                        {...register('surname',{
                                            required:true,
                                        })}
                                        placeholder='Enter your surnames'
                                        onChange={handleSignUpFormChange}
                                    />
                                    <small id="surnameHelp" className="form-text text-muted">Enter 1st and 2nd surname. Example: (Arancibia Linker).</small>
                                    {errors.surname && <p className='error-validator'>Surnames are required!.</p>}
                                </label>
                            </div>
                            <div className='form-group'>
                                {/* <Input label='Username' name='username' type='text' placeholder='Enter your username' register={register} required={true} onChange={handleSignUpFormChange}/> */}
                                <label>
                                    <p className='label-signup'>Username</p>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="username"
                                        {...register('username',{
                                            required:true,
                                        })}
                                        placeholder='Enter your Username.'
                                        onChange={handleSignUpFormChange}
                                    />
                                </label>
                            </div>
                            <div className='form-group'>
                                {/* <Input label='Email' name='email' type='email' placeholder='Enter your email' register={register} required={true} onChange={handleSignUpFormChange}/> */}
                                <label>
                                    <p className='label-signup'>Email</p>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        {...register('email',{
                                            required:true,
                                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                        })}
                                        placeholder='Enter your Email'
                                        onChange={handleSignUpFormChange}
                                    />
                                </label>
                                {errors.email && <p className='error-validator'>Email are required.</p>}
                            </div>
                            <div className='form-group'>
                                {/* <Input label='Password' name='password' type='password' placeholder='Enter your password' register={register} required={true} onChange={handleSignUpFormChange}/> */}
                                <label>
                                    <p className='label-signup'>Password</p>
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        {...register('password',{
                                            required:true,
                                        })}
                                        placeholder='Enter your Password'
                                        onChange={handleSignUpFormChange}
                                    />
                                </label>
                            </div>
                            <div className='form-group'>
                                <button className="btn btn-danger form-control mt-3" type="submit">Sign Up!</button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )

}

export default SignUp;