import React from 'react';
import '../assets/scss/Login.scss'
import logo from '../assets/img/logo.svg'

import { useForm } from 'react-hook-form'

const Login = () => {
    type LoginCred = {
        email: string;
        password: string;
    }
    const onSubmit = (d:LoginCred) => {
        alert(d);
    }
    const { register, handleSubmit } = useForm<LoginCred>();

    return (
    <>
    <div className='wrapper'>
        <div className='background' />
        <img className='logo' src={logo} alt='' />
        <div className='form-wrapper'>
            <h1>Login to DataPoint™</h1>
            <form>
                <div className='element'>
                    <label>Email</label>
                    <input name='email' id='email' type='email' ref={register} />
                    <div className='decoration email' />
                </div>
                <div className='element'>
                    <label>Password</label>
                    <input name='password' id='password' type='password' ref={register}/>
                    <div className='decoration password' />
                </div>
                <div className='element btn'>
                    <button type='submit' onSubmit={handleSubmit(onSubmit)}>Login</button>
                </div>
            </form>
        </div>
    </div>
    </>)
}

export default Login