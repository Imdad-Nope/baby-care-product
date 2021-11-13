import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser, logInUsingEmailAndPassword, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const uri = location.state?.from || "home"


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { register, handleSubmit } = useForm();
    // const onSubmit = e => {
    //     console.log(e.target.value);
    // };


    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }


    const handleRegistration = e => {
        e.preventDefault()
        logInUsingEmailAndPassword(email, password).then((res) => {

            setIsLoading(true)
            setUser(res.user)
            sessionStorage.setItem("email", res.user.email);
            history.push(uri)
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const handleGoogleSign = () => {
        signInUsingGoogle().then(res => {
            setIsLoading(true)
            setUser(res.user)
            sessionStorage.setItem("email", res.user.email);
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

                <input onBlur={handleEmail} type="email" name="" id="" placeholder="Email" />

                <input onBlur={handlePassword} type="password" name="" id="" placeholder="Password" />
                <input type="submit" />
            </form>
            <div>
                <span className="text-danger"> Didn'nt create account yet? </span>
                <Link to="/register"><button className="bg-light">Register</button></Link>
            </div>
            <br />
            <button onClick={handleGoogleSign}>Google Sign In</button>

        </div>
    );
};

export default Login;