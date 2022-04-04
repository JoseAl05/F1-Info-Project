import React, { useState } from 'react';
import "../../styles/signup.css";
import axios from "axios";
import { useForm } from "react-hook-form";


const Input = ({label,name,type,placeholder,register,required,onChange}) => {
    if(type === 'text'){
        <>
            <label>{label}</label>
            <input className="form-control" type={type} name={name} placeholder={placeholder} {...register(name,{required})} onChange={onChange}/>
        </>
    }
    if(type === 'email'){
        <>
            <label>{label}</label>
            <input className="form-control" type={type} name={name} placeholder={placeholder} {...register(name,{required,pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})} onChange={onChange}/>
        </>
    }
    if(type === 'password'){
        <>
            <label>{label}</label>
            <input className="form-control" type={type} name={name} placeholder={placeholder} {...register(name,{required})} onChange={onChange}/>
        </>
    }

}

export default Input;