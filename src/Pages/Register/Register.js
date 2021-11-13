import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, setUser, signInUsingEmail, setIsLoading, updateName } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const uri = location.state?.from || "home"

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }



    const handleRegistration = e => {
        e.preventDefault()
        signInUsingEmail(email, password)
            .then((res) => {
                sessionStorage.setItem("email", res.user.email);
                setIsLoading(true)
                updateName(name)

                // Signed in 
                setUser(res.user)
                history.push(uri)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => {
                setIsLoading(false)
            })
    };


    const handleGoogleSignIn = () => {
        signInUsingGoogle().then(res => {
            sessionStorage.setItem("email", res.user.email);
            setIsLoading(true)
            setUser(res.user)
            history.push(uri)
        })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div className="babys-data mt-5">
            <form onSubmit={handleRegistration}>
                <input onBlur={handleName} placeholder="Name" />
                <input onBlur={handleEmail} type="email" name="" id="" placeholder="Email" />

                <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" />
                <input type="submit" />
            </form>
            <div>
                <span className="text-success"> Alreday have an account?</span>
                <Link to="/login"> <button className="bg-light">Login</button></Link>
            </div>
            <br />
            <button onClick={handleGoogleSignIn}>Google Sign In</button>

        </div>
    );
};

export default Register;