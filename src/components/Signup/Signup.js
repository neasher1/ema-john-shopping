import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Signup = () => {

    const { signupUser } = useContext(AuthContext);

    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            setError("Password should be at least 6 character");
            return;
        }

        if (password !== confirm) {
            setError("Confirm Password Doesn't match");
            return;
        }

        signupUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='password' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value="Register" />
            </form>
            <p>{error}</p>
            <p>Already have an account? <Link to='/login'>Login</Link> </p>
        </div>
    );
};

export default Signup;