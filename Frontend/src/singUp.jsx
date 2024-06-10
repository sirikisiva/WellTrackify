import React, { useState } from "react";
import './sign.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const goToSignIn = () =>{
        navigate('/SignIn');
    }

    const handleSignUp = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        navigate('/SignIn', { state: { successMessage: 'Account created successfully. Please log in.' } });
    }

    return (
        <div className="sign-bg">
            <div className="sign-app-name d-flex justify-content-center">Welltrackify</div>
            <div className="sign-box">
                <div className="sign-log d-flex justify-content-center">Create your account</div>
                <form className="sign-form" onSubmit={handleSignUp}>
                    <div className="form-group mt-2">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className="form-control" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="username">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="form-control" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            className="form-control" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            className="form-control" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required 
                        />
                    </div>
                    {error && (
                    <div className="alert alert-danger mt-4" role="alert">
                        {error}
                    </div>
                )}
                    <button type="submit" className="login">Create Account</button>
                </form>
                <div className="d-flex mt-4 flex-row justify-content-center">
                   <div className="account" onClick={goToSignIn}>Already have an account? Login! </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
