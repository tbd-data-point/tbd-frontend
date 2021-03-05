import '../assets/scss/Signup.scss'
import logo from '../assets/img/logo.svg'
import * as yup from 'yup'
import { TiWarning } from 'react-icons/ti'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type SignupCred = {
    fname?: string;
    lname?: string;
    email?: string;
    password?: string;
    passwordMatch?: string;
}

const Signup = () => {
    const schema = yup.object().shape({fname: yup.string().required(), lname: yup.string().required(), email: yup.string().email().required(), password: yup.string().required(), passwordMatch: yup.string().oneOf([yup.ref('password'), null]) })
    const { register, handleSubmit, errors } = useForm<SignupCred>({resolver: yupResolver(schema)});
    const onSubmit = (data:SignupCred) => {
        alert(JSON.stringify(data))
    }

    return (
    <>
    <div className='wrapper'>
        <div className='background' />
        <Link to='/'><img className='logo' src={logo} alt='' /></Link>
        <div className='form-wrapper'>
            <h1>Signup to DataPoint™</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='element'>
                    <label>First Name</label>
                    <div className='input-wrapper'><input name='fname' id='fname' type='text' ref={register()} /><div className='decoration' /></div>
                    {errors.fname && errors.fname.type === "required" && <ErrorMessage message='Please enter your first name!'/>}
                </div>
                <div className='element'>
                    <label>Last Name</label>
                    <div className='input-wrapper'><input name='lname' id='lname' type='text' ref={register()} /><div className='decoration' /></div>
                    {errors.lname && errors.lname.type === "required" && <ErrorMessage message='Please enter your last name!'/>}
                </div>
                <div className='element'>
                    <label>Email</label>
                    <div className='input-wrapper'><input name='email' id='email' type='email' ref={register()} /><div className='decoration' /></div>
                    {errors.email && errors.email.type === "required" && <ErrorMessage message='Please enter your email!'/>}
                    {errors.email && errors.email.type === 'email' && <ErrorMessage message='Please enter valid email!'/>}
                </div>
                <div className='element'>
                    <label>Password</label>
                    <div className='input-wrapper'><input name='password' id='password' type='password' ref={register()}/>
                    <div className='decoration' /></div>
                    {errors.password && errors.password.type === 'required' && <ErrorMessage message='Please enter your password!' />}
                </div>
               
                <div className='element'>
                    <label>Repeat Password</label>
                    <div className='input-wrapper'>
                        <input name='passwordMatch' id='passwordMatch' type='password' ref={register()} />
                        <div className='decoration' />
                        
                    </div>
                    {errors.passwordMatch && errors.passwordMatch.type === 'oneOf' && <ErrorMessage message='Passwords must match!' />}
                </div>
                <div className='btn'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>)
}

export default Signup

type ErrorMessageProps = {
    message: string
}

const ErrorMessage = ({message}:ErrorMessageProps) => {
   return ((<p className='error'><TiWarning /> &nbsp;{message}</p>)) 
}

