import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Auth.css'


const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [userName, setuserName] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [emailError, setEmailError] = useState('');
    const [userError, setUserError] = useState('');

    const [passwordError, setPasswordError] = useState('');
    const [checkedError, setCheckedError] = useState('');
    // const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission




    const validateForm = () => {
        let isValid = true;


        if (!firstName) {
            setFirstNameError('Please enter your first name')
            isValid = false;
        } else {
            setFirstNameError('')
        }

        if (!lastName) {
            setLastNameError('Please enter your last name')
            isValid = false
        } else {
            setLastNameError('')
        }

        if (!userName) {
            setUserError('Please enter valid username')
        } else {
            setUserError('')
        }

        if (!/\S+@\S+\.\S+/.test(Email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Password validation
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_+!])[A-Za-z\d@#$%^&*()_+!]{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (!isChecked) {
            setCheckedError('Please agree term & condition to proceed forword')
            isValid = false;
        } else {
            setCheckedError('')
        }
        // setIsSubmitted(isValid)
        // setIsFormValid(isValid)

        return isValid;
    }

    function loginhandle(e) {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }

    }

    const login = () => {
        if (validateForm()) {
            localStorage.setItem('isLogIn', 'true')
            navigate('/dashboard');
        }

    }
    return (

        <div className="login-container">
            <div className="inner-first-container">
                <h2 className="heading-page text-color-one">Welcome To Login Page</h2>
            </div>
            <div className="inner-second-container text-color">
                <form onSubmit={loginhandle}>
                    <h3>Create an account</h3>
                    <p>It's free and always will be.</p>
                    <div className="divider"></div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="formforFirstName">First Name</label>
                                <input type="text" className="form-control" id="formforFirstName" placeholder="First Name" value={firstName} onChange={(e) => setfirstName(e.target.value)} error={firstNameError} />
                                {firstName ? (<small className="text-danger"></small>) : (<small className="text-danger">{firstNameError}</small>)}

                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="form-group">
                                <label htmlFor="formforLastName">Last Name</label>
                                <input type="text" className="form-control" id="formforLastName" placeholder="Last Name" value={lastName} onChange={(e) => setlastName(e.target.value)} />
                                {lastName ? (<small className="text-danger"></small>) : (<small className="text-danger">{lastNameError}</small>)}
                            </div>
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" className="form-control" id="Username" aria-describedby="Username" placeholder="Enter Username" value={userName} onChange={(e) => setuserName(e.target.value)} />
                        {userName ? (<small className="text-danger"></small>) : (<small className="text-danger">{userError}</small>)}
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                        <small id="emailHelp" className="text-color">We'll never share your email with anyone else.</small>
                        <br />
                        {!/\S+@\S+\.\S+/.test(Email) ? (<small className="text-danger">{emailError}</small>) : (<small className="text-danger"></small>)}

                        {/* <small className="text-danger">{emailError}</small> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()_+!])[A-Za-z\d@#$%^&*()_+!]{8,}$/.test(password) ? (<small className="text-danger">{passwordError}</small>) : (<small className="text-danger"></small>)}
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" value={isChecked} onChange={(e) => setIsChecked(e.target.value)} />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        {isChecked ? (<small className="text-danger"></small>) : (<small className="text-danger">{checkedError}</small>)}

                    </div>

                    <button
                        type="submit"
                        className="login-button"
                        disabled={isSubmitted} // Disable the button when the form is submitted
                        onClick={login}
                    >
                        {isSubmitted ? (
                                 'Submitting...'  
                        ) : (
                            'Login' // Show the original text when the form is not submitted
                        )}
                    </button>
                </form>

            </div>

        </div>
    )
}
export default Login; 