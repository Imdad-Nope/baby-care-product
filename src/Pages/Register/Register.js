import { Alert, Box, Button, Card, CardContent, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle, setUser, signInUsingEmail, setIsLoading, updateName, isLoading, user, authError, setAuthError } = useAuth();
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
        setIsLoading(true)
        e.preventDefault()
        signInUsingEmail(email, password)
            .then((res) => {
                setAuthError('')
                sessionStorage.setItem("email", res.user.email);
                setIsLoading(true)
                updateName(name)

                // Signed in 
                setUser(res.user)
                history.push(uri)
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false))
    };


    const handleGoogleSignIn = () => {
        setIsLoading(true)
        signInUsingGoogle().then(res => {
            sessionStorage.setItem("email", res.user.email);
            setIsLoading(true)
            setUser(res.user)
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
                    <CardContent>
                        <Grid item xs={12}>
                            < Grid spacing={2}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Register
                                </Typography>
                                {!isLoading && <form onSubmit={handleRegistration}>
                                    <TextField
                                        sx={{
                                            m: 1,
                                            width: '35ch'
                                        }}
                                        id="standard-name-input"
                                        label="Name"
                                        type="name"
                                        onBlur={handleName}
                                        variant="standard"
                                    />

                                    <Grid item={12}>
                                        <TextField
                                            sx={{
                                                m: 1,
                                                width: '35ch'
                                            }}
                                            id="standard-email-input"
                                            label="Email"
                                            type="email"
                                            onBlur={handleEmail}
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item={12}>
                                        <TextField
                                            sx={{
                                                m: 1,
                                                width: '35ch'
                                            }}

                                            id="standard-password-input"
                                            label="Password"
                                            type="password"
                                            onBlur={handlePassword}
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Button variant='contained' sx={{
                                        m: 1,
                                        width: '38ch'
                                    }} type='submit'>Submit</Button>
                                </form>}
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">Registerd successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}

                                <Link style={{
                                    m: 1,
                                    width: '35ch',
                                    textDecoration: 'none'
                                }} to="/login">
                                    <Button variant='text'>Alreday have an account? Please login</Button>
                                </Link>

                            </Grid>
                            {/* <Button sx={{ width: '35ch' }} variant='contained' onClick={handleGoogleSignIn}>Google sign In</Button> */}
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </Container >

    );
};

export default Register;