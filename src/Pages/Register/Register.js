import React, { useState } from 'react';
import { Alert, Button, Card, CardContent, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import regImg from '../../images/regImg.png';


const Register = () => {
    const { setUser, signInUsingEmail, setIsLoading, updateName, isLoading, user, authError, setAuthError } = useAuth();
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


    // const handleGoogleSignIn = () => {
    //     setIsLoading(true)
    //     signInUsingGoogle().then(res => {
    //         sessionStorage.setItem("email", res.user.email);
    //         setIsLoading(true)
    //         setUser(res.user)
    //         history.push(uri)
    //     })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    //         .finally(() => setIsLoading(false))
    // }
    return (
        <Container>

            <Grid>
                <Grid container sx={{ alignItems: 'center', p: '12%' }}>
                    <Grid item xs={12} sm={6}>
                        <img src={regImg} alt="" width='100%' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ bgcolor: '#def7e5', borderRadius: 4, height: '420px', width: '70%' }}>
                            <CardContent>
                                <Grid item xs={12}>
                                    < Grid spacing={2}>
                                        <Typography fontWeight='700' variant="h6" gutterBottom component="div" sx={{ color: '#32a86f' }}>
                                            Registration
                                        </Typography>
                                        {<form onSubmit={handleRegistration}>
                                            <TextField

                                                id="standard-name-input"
                                                label="Name"
                                                type="name"
                                                onBlur={handleName}
                                                variant="standard"
                                                fullWidth
                                            />

                                            <Grid item={12}>
                                                <TextField
                                                    sx={{
                                                        my: 2

                                                    }}
                                                    id="standard-email-input"
                                                    label="Email"
                                                    type="email"
                                                    onBlur={handleEmail}
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item={12}>
                                                <TextField

                                                    id="standard-password-input"
                                                    label="Password"
                                                    type="password"
                                                    onBlur={handlePassword}
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid align='left'>
                                                <Button variant='contained' sx={{
                                                    my: 3,
                                                    bgcolor: '#32a86f'
                                                }} type='submit'>Register</Button>
                                            </Grid>
                                        </form>}
                                        {isLoading && <CircularProgress />}
                                        {user?.email && <Alert severity="success">Registerd successfully!</Alert>}
                                        {authError && <Alert severity="error">{authError}</Alert>}

                                        <Typography>Already have account?
                                            <span> <Link style={{ textDecoration: 'none', color: '#32a86f' }} to="/login">
                                                Sign In
                                            </Link>
                                            </span>
                                        </Typography>

                                    </Grid>

                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Grid>

        </Container >

    );
};

export default Register;