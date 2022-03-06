import { Box, Button, Card, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const { signInUsingGoogle, setUser, logInUsingEmailAndPassword, setIsLoading, isLoading, user, authError, setAuthError } = useAuth();
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


    const handleLogin = e => {
        setIsLoading(true)
        e.preventDefault()
        logInUsingEmailAndPassword(email, password)
            .then((res) => {
                setAuthError('')
                setUser(res.user)
                sessionStorage.setItem("email", res.user.email);
                history.push(uri)
            })
            .catch((error) => {

                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
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
            .finally(() => setIsLoading(false))
    }
    return (

        <Container>
            <Box sx={{ flexGrow: 1, mt: 5 }}>
                <Card>
                    <Grid spacing={2} sx={{ m: 2 }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Login
                        </Typography>
                        {!isLoading && <Grid item xs={12}>
                            <form onSubmit={handleLogin}>
                                <TextField
                                    sx={{
                                        width: '35ch',
                                        m: 1
                                    }}
                                    id="standard-email-input"
                                    label="Email"
                                    type="email"
                                    onBlur={handleEmail}
                                    variant="standard"
                                />
                                <Grid item={12} >
                                    <TextField
                                        sx={{
                                            width: '35ch',
                                            m: 1
                                        }}
                                        id="standard-password-input"
                                        label="Password"
                                        type="password"
                                        onBlur={handlePassword}
                                        variant="standard"
                                    />
                                </Grid>
                                <Button type='submit' sx={{ width: '38ch', m: 1 }} variant='contained'>Submit</Button>
                            </form>
                        </Grid>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                        <Link to='/register' style={{ m: 2, textDecoration: 'none' }}>
                            <Button variant='text'>Did not have an account? Please register</Button>
                        </Link>
                    </Grid>
                </Card>
                <Button sx={{ m: 1 }} variant='contained' onClick={handleGoogleSign}>Google Sign In</Button>
            </Box>
        </Container >

    );
};

export default Login;