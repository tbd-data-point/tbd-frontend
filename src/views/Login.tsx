import '../assets/scss/Login.scss'
import logo from '../assets/img/logo.svg'

import { useState } from 'react'
import * as yup from 'yup'
import { TiWarning } from 'react-icons/ti'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [loginStatus, setLoginStatus] = useState<number>()
  const [cookies, setCookie] = useCookies(['user'])

  let history = useHistory()

  type LoginCred = {
    email: string
    password: string
  }
  const onSubmit = (d: LoginCred) => {
    axios
      .post('http://localhost:5000/user/login', { ...d })
      .then((res) => {
        setLoginStatus(1)
        setCookie('user', res.data)
        axios.defaults.headers.common[
          'Authorization'
        ] = `Basic ${res.data}`
        history.push('/app/dashboard')
      })
      .catch((err) => {
        setLoginStatus(0)
      })
  }

  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

  const { register, handleSubmit, errors } =
    useForm<LoginCred>({ resolver: yupResolver(schema) })

  return (
    <>
      <div className="wrapper">
        <div className="background" />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="form-wrapper">
          <h1>Login to DataPoint™</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="element">
              <label>Email</label>
              <div className="input-wrapper">
                <input
                  name="email"
                  id="email"
                  type="email"
                  ref={register()}
                />
                <div className="decoration email" />
              </div>
              {errors.email &&
                errors.email.type === 'required' && (
                  <ErrorMessage message="Please enter your email!" />
                )}
              {errors.email &&
                errors.email.type === 'email' && (
                  <ErrorMessage message="Please enter valid email!" />
                )}
            </div>
            <div className="element">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  name="password"
                  id="password"
                  type="password"
                  ref={register({ required: true })}
                />
                <div className="decoration password" />
              </div>

              {errors.password &&
                errors.password.type === 'required' && (
                  <ErrorMessage message="Please enter your password!" />
                )}
            </div>
            {loginStatus == 0 && (
              <ErrorMessage message="Bad login or password!" />
            )}

            <div className="btn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

type ErrorMessageProps = {
  message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className="error">
      <TiWarning /> &nbsp;{message}
    </p>
  )
}
