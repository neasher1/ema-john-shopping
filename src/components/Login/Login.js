import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom/dist';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [errorM, setErrorM] = useState('');
    const [success, setSuccess] = useState(null);

    //redirect user to current path during review page while login
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
                setSuccess('Successfully Logged in');
            })
            .catch(error => {
                setErrorM(error.message);
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>{errorM}</p>
            <p>{success}</p>
            <p>New to Ema-john? <Link to='/signup'>Create New Account</Link> </p>
        </div>
    );
};

export default Login;