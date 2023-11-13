import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { BiSolidLock } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { signup, login } from '../../actions/auth'

const Login = () => {

    const [isSignup, setIsSignup] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) {
            alert('Enter email and password');
        }
        if (isSignup) {
            if (!name) {
                alert("Enter a name to continue");
            }
            dispatch(signup({ name, email, password }, navigate));
        } else {
            dispatch(login({ email, password }, navigate));
        }
        console.log({ name, email, password });
    }

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
                    <form onSubmit={handleSubmit}>
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <MdEmail />
                            </span>
                            <input
                                type="email"
                                name="login_email"
                                id="email"
                                onChange={(e) => (setEmail(e.target.value))}
                                required />
                            <label htmlFor="loginEmail">Email</label>
                        </div>
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <BiSolidLock />
                            </span>
                            <input
                                type="password"
                                name="login_password"
                                id="password"
                                onChange={(e) => (setPassword(e.target.value))}
                                required />
                            <label htmlFor="loginPassword">Password</label>
                        </div>
                        <div className="app_login_forgot">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <div>Forgot Password?</div>
                        </div>
                        <button type="submit" className='app_login_btn'>Login</button>
                        <div className="app_login_register">
                            <p>Don't have an account?
                                <div className='app_registerLink' onClick={() => setIsSignup(true)}>Register</div>
                            </p>
                        </div>
                    </form>
                </div>

                <div className="app_form register">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <FaUserAlt />
                            </span>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                onChange={(e) => (setName(e.target.value))}
                                required />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <MdEmail />
                            </span>
                            <input
                                type="email"
                                name="login_email"
                                id="email"
                                onChange={(e) => (setEmail(e.target.value))}
                                required />
                            <label htmlFor="loginEmail">Email</label>
                        </div>
                        <div className="app_login_inputBox">
                            <span className='app_login_icon'>
                                <BiSolidLock />
                            </span>
                            <input
                                type="password"
                                name="login_password"
                                id="password"
                                onChange={(e) => (setPassword(e.target.value))}
                                required />
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
                                <div className='app_loginLink' onClick={() => setIsSignup(false)}>Login</div>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
