import React, { useEffect, useState } from "react";
import './sign.css';
import { useNavigate, useLocation } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (location.state && location.state.successMessage) {
            setSuccessMessage(location.state.successMessage);
            setTimeout(() => {
                setSuccessMessage("");
            }, 2000);
        }
    }, [location.state]);

    const goToCreateAccount = () => {
        navigate('/SignUp');
    }

    const handleLogin = (event) => {
        event.preventDefault();
        
        if (!username || !password) {
            setError("Please fill in both username and password.");
            return;
        }

        navigate('/mainScreen');
    }

    return (
        <div className="sign-bg">
            <div className="sign-app-name d-flex justify-content-center">Welltrackify</div>
            <div className="sign-box">
                <div className="sign-log d-flex justify-content-center">Log into your account</div>
                <div className="sign-google">
                    <div>
                        <img className="google-width" src="./google.jpg" alt="Google" /> Continue With Google
                    </div>
                </div>
                <div>
                <form className="sign-form" onSubmit={handleLogin}>
                        <div className="form-group mt-2">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                className="form-control" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                        {error && (
                            <div className="alert alert-danger mt-2" role="alert">
                                {error}
                            </div>
                        )}
                        {successMessage && (
                            <div className="alert alert-success mt-2" role="alert">
                                {successMessage}
                            </div>
                        )}
                        <button type="submit" className="login">Login</button>
                    </form>
                </div>
                <div className="d-flex mt-4 flex-row justify-content-center">
                   <div className="account" onClick={goToCreateAccount}>Create account</div> <span className="dot"></span>
                   <div className="account">Forgot password</div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
