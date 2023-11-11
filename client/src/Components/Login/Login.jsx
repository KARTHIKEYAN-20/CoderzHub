import React from 'react'
import { MdEmail } from 'react-icons/md'
import { BiSolidLock } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { useEffect } from 'react'
import './Login.css'

const Login = () => {

    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');
        const loginLink = document.querySelector('.app_loginLink');
        const registerLink = document.querySelector('.app_registerLink');

        const handleRegisterClick = () => {
            wrapper.classList.add('active');
        };

        const handleLoginClick = () => {
            wrapper.classList.remove('active');
        };

        registerLink.addEventListener('click', handleRegisterClick);
        loginLink.addEventListener('click', handleLoginClick);

        return () => {
            registerLink.removeEventListener('click', handleRegisterClick);
            loginLink.removeEventListener('click', handleLoginClick);
        };
    }, []);

    return (
        <div className="app_login">
            <div className="wrapper">
                <span className="app_login_iconClose">
                    <IoCloseSharp />
                </span>
                <div className="app_form login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <MdEmail />
                            </span>
                            <input type="email" name="login_email" id="email" required />
                            <label htmlFor="loginEmail">Email</label>
                        </div>
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <BiSolidLock />
                            </span>
                            <input type="password" name="login_password" id="password" required />
                            <label htmlFor="loginPassword">Password</label>
                        </div>
                        <div className="app_login_forgot">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className='app_login_btn'>Login</button>
                        <div className="app_login_register">
                            <p>Don't have an account?
                                <a href="#" className='app_registerLink'>Register</a>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="app_form register">
                    <h2>Register</h2>
                    <form action="#">
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <FaUserAlt />
                            </span>
                            <input type="text" name="username" id="username" required />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <MdEmail />
                            </span>
                            <input type="email" name="login_email" id="email" required />
                            <label htmlFor="loginEmail">Email</label>
                        </div>
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <BiSolidLock />
                            </span>
                            <input type="password" name="login_password" id="password" required />
                            <label htmlFor="loginPassword">Password</label>
                        </div>
                        <div className="app_login_forgot">
                            <label>
                                <input type="checkbox" />
                                Agree to the term &amp; conditions
                            </label>
                        </div>
                        <button type="submit" className='app_login_btn'>Register</button>
                        <div className="app_login_register">
                            <p>Already have an account?
                                <a href="#" className='app_loginLink'>Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
