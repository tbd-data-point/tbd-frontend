import '../assets/scss/Signup.scss'
import logo from '../assets/img/logo.svg'

import {useState} from 'react'
import * as yup from 'yup'
import { TiWarning } from 'react-icons/ti'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

type SignupCred = {
    email?: string;
    password?: string;
}

const Signup = () => {
    const [data, setData] = useState({})
    const [progress, setProgress] = useState(1)

    const nextStep = () => {
        setProgress(progress + 1);
    }

    const updateData = ({email, password}:SignupCred) => {
        setData({...data, email, password})
    }

    const steps = [1,2,3,4]

    return (
    <>
    <div className='wrapper'>
        <div className='background' />
        <Link to='/'><img className='logo' src={logo} alt='' /></Link>
        <div className='form-wrapper'>
            <h1>Signup to DataPoint™</h1>
            <div className='progress-bar'>{steps.map(e => {
                if (e === steps[steps.length - 1])
                return <><div className='square'>{e}</div></>
                else 
                return <><div className='square'>{e}</div><div className={`progress-line ${e < progress ? `gradient_${e}` : 'black'}`}></div></>
                
                })}</div>
            {progress === 1 ? <StepOne nextStep={nextStep} updateData={updateData}/> : <StepTwo />}
            
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

type StepOneProps = {
    nextStep: () => void;
    updateData: ({email, password}:SignupCred) => void;
}

const StepOne = ({nextStep, updateData}:StepOneProps) => {

    const schema = yup.object().shape({email: yup.string().email().required(), password: yup.string().required()})
    const { register, handleSubmit, errors } = useForm<SignupCred>({resolver: yupResolver(schema)});
    const onSubmit = (data:SignupCred) => {
        nextStep()
        updateData({email: data.email, password: data.password})
    }

    return <>
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
                    
                    {errors.password && errors.password.type === 'required' && <ErrorMessage message='Please enter your password!' />}
                </div>
                <div className='btn'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
    </>
}

const StepTwo = () => {
    return <>
        <form>
            <div className='element'>
                <label>First Name</label>
                <div className='input-wrapper'><input name='fname' id='fname' type='text'/><div className='decoration password' /></div>
            </div>
            <div className='element'><label>Last Name</label>
                <div className='input-wrapper'><input name='lname' id='lname' type='text'/><div className='decoration password' /></div></div>
        </form>
    </>
}