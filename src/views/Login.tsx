import '../assets/scss/Login.scss'
import logo from '../assets/img/logo.svg'

import * as yup from 'yup'
import { TiWarning } from 'react-icons/ti'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
    type LoginCred = {
        email: string;
        password: string;
    }
    const onSubmit = (d:LoginCred) => {
        alert(JSON.stringify(d));
    }

    const schema = yup.object().shape({email: yup.string().email().required(), password: yup.string().required()})

    const { register, handleSubmit, errors } = useForm<LoginCred>({resolver: yupResolver(schema)});

    return (
    <>
    <div className='wrapper'>
        <div className='background' />
        <Link to='/'><img className='logo' src={logo} alt='' /></Link>
        <div className='form-wrapper'>
            <h1>Login to DataPoint™</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='element'>
                    <label>Email</label>
                    <div className='input-wrapper'><input name='email' id='email' type='email' ref={register()} /><div className='decoration email' /></div>
                    {errors.email && errors.email.type === "required" && <ErrorMessage message='Please enter your email!'/>}
                    {errors.email && errors.email.type === 'email' && <ErrorMessage message='Please enter valid email!'/>}
                </div>
                <div className='element'>
                    <label>Password</label>
                    <div className='input-wrapper'><input name='password' id='password' type='password' ref={register({required: true})}/>
                    <div className='decoration password' /></div>
                    {errors.password && errors.password.type === 'required' && <ErrorMessage message='Please enter your password!'/>}
                </div>
                <div className='btn'>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    </div>
    </>)
}

export default Login

type ErrorMessageProps = {
    message: string
}

const ErrorMessage = ({message}:ErrorMessageProps) => {
   return ((<p className='error'><TiWarning /> &nbsp;{message}</p>)) 
}