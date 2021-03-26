import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Login.css';
const Login = () => {
    return (
        <>
            <div className="container login">
                <div className="row">
                    <div className="col-md-4 login-left">
                        {/* <img src="./images/health.jpg" alt="" height="75" width="150" /> */}
                        <img src="./images/login.png" alt="" height="75" width="150" />
                        {/* <h3>Login AarogyaCard Account</h3>
                        <p>Login now For Digital Health Card </p> */}
                        <h3>Welcome to Login Page</h3>
                        <p>Login now  </p>
                        <h6>Create an Account</h6>
                        <Button
                            variant='contained'
                            size='large'
                            color='secondary'
                            className='left-button'
                        >
                            Register
                        </Button>
                    </div>
                    <div className="col-lg-7 login-right">

                        {/* <h3 className="Login-heading">Login For HelathCard</h3> */}
                        <h3 className="Login-heading">Login Form</h3>
                        <div className="row login-form">
                            <div className="col-md-6 container">
                                <div className="form-group">
                                    <TextField
                                        type="text"
                                        variant='outlined'
                                        className="form-control"
                                        label="User ID"
                                        color="secondary"
                                        size='medium'
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <TextField
                                        type="password"
                                        variant='outlined'
                                        className="form-control"
                                        color="secondary"
                                        label="Password"
                                        size='medium'
                                        required
                                    // value=""
                                    />
                                </div>

                                <div className='form-group'>
                                    <Button
                                        type="button"
                                        color="secondary"
                                        variant='contained'
                                        className="form-control"
                                        size='large'
                                        className='ml-5 mt-4'
                                    >
                                        Login
                                </Button>
                                </div>
                                <div className='form-group'>
                                    <a href="#" className='ml-3'>Forgot password?</a>
                                    <a href="#" className='ml-3'>Need a help?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;