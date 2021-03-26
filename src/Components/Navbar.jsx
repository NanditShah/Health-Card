import React, { Component } from 'react';
import { state } from 'react'
import 'react-jquery-plugin';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


class Navbar extends Component {

    componentDidMount() {
        window.$(function () {
            window.$(window).scroll(() => {
                if (window.$(window).scrollTop() > 10) {
                    window.$('.navbar').addClass('active');
                } else {
                    window.$('.navbar').removeClass('active');
                }
            });
        });
    }

    render() {

        return (
            <>
                <header className="header">
                    <nav className="navbar navbar-expand-lg fixed-top py-3 container">
                        <div className="container"><NavLink to="/Home" className="navbar-brand text-uppercase font-weight-bold">Transparent Nav</NavLink>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                                aria-controls="navbarCollapse"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div id="navbarCollapse" className='collapse navbar-collapse'>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink to="/Home" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Register" className="nav-link text-uppercase font-weight-bold">Register</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Login" className="nav-link text-uppercase font-weight-bold">Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Contact" className="nav-link text-uppercase font-weight-bold">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/About" className="nav-link text-uppercase font-weight-bold">About</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
    }
}

export default Navbar;