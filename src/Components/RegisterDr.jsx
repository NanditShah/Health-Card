import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
const RegisterDr = ({ handleClick }) => {
    return (
        <>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src='./images/health.jpg' alt="" height="75" width="150" />
                        <h3>Create an Account</h3>
                        <p>Free Register For Digital Health Card</p>
                        <h6>Have an Account?</h6>
                        {/* <input type="submit" name="submit" value="Login" /> */}
                        <Button
                            variant='contained'
                            size='large'
                            color='secondary'
                            className='left-button mb-2'
                        >
                            Login
                        </Button>
                        <br />
                    </div>
                    <div className="col-md-9 register-right">
                        <ul
                            className="nav nav-tabs nav-justified"
                            id="myTab"
                            role="tablist"
                        >
                            <li className="nav-item">
                                <a
                                    name="Patient"
                                    onClick={handleClick}
                                    className="nav-link"
                                    id="patient-tab"
                                    data-toggle="tab"
                                    href="#patient"
                                    id="patient"
                                    role="tab"
                                    aria-controls="patient"
                                    aria-selected="true"
                                >
                                    Patient
                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    name="Doctor"
                                    onClick={handleClick}
                                    className="nav-link active"
                                    id="doctor-tab"
                                    data-toggle="tab"
                                    href="#doctor"
                                    id="doctor"
                                    role="tab"
                                    aria-controls="doctor"
                                    aria-selected="false"
                                >
                                    Doctor
                </a>
                            </li>
                        </ul>
                        <div
                            className="tab-pane fade show"
                            id="doctor"
                            role="tabpanel"
                            aria-labelledby="doctor-tab"
                        >
                            <h3 className="register-heading">Register as a Doctor</h3>
                            <div className="row register-form">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="text"
                                            className="form-control"
                                            label="Hospital Name *"
                                            color="secondary"
                                        // value=""
                                        />
                                    </div>

                                    <div className="form-group">
                                        <TextField
                                            type="text"
                                            variant='outlined'
                                            label='Doctor Name'
                                            className="form-control"
                                            color="secondary"
                                        // label="Doctor`s Name *"
                                        // value=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="email"
                                            className="form-control"
                                            label="Email *"
                                            color="secondary"
                                        // value=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="text"
                                            maxLength="10"
                                            minLength="10"
                                            className="form-control"
                                            label="Phone *"
                                            color="secondary"
                                        // value=""
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="text"
                                            className="form-control"
                                            label="Hospital Registration No. *"
                                            color="secondary"
                                        // value=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="password"
                                            className="form-control"
                                            label="Password *"
                                            color="secondary"
                                        // value=""
                                        />
                                    </div>

                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type="password"
                                            className="form-control"
                                            label="Confirm Password *"
                                            color="secondary"
                                        // value=""
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            variant='outlined'
                                            type=""
                                            className="form-control"
                                            label="Hospital Adress *"
                                            color="secondary"
                                        // value=""
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        color="secondary"
                                        variant='contained'
                                        className='mt-3'
                                        size='large'
                                    >Register</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterDr;