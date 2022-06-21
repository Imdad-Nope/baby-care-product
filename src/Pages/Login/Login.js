import React, { useState } from 'react';
import { Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import loginImg from '../../images/loginImg.png';

const Login = () => {
    const { signInUsingGoogle, setUser, logInUsingEmailAndPassword, setIsLoading, isLoading, user, authError, setAuthError } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const uri = location.state?.from || "home"


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

        <div>
            <Container >

                <Grid>
                    <Grid container sx={{ alignItems: 'center', p: '12%' }}>
                        <Grid item xs={12} sm={6}>
                            <Card sx={{ height: '480px', width: '70%', borderRadius: 4, bgcolor: '#def7e5' }}>

                                <CardContent>
                                    <Grid item xs={12}>
                                        <Grid spacing={8}>
                                            <Typography variant="h6" gutterBottom component="div" fontWeight='700' sx={{ color: '#32a86f', mb: 3 }}>
                                                Sign In
                                            </Typography>
                                            {
                                                <form onSubmit={handleLogin}>
                                                    <TextField

                                                        id="standard-email-input"
                                                        label="Email"
                                                        type="email"
                                                        onBlur={handleEmail}
                                                        variant="standard"
                                                        fullWidth
                                                    />

                                                    <TextField
                                                        sx={{

                                                            my: 2
                                                        }}
                                                        id="standard-password-input"
                                                        label="Password"
                                                        type="password"
                                                        onBlur={handlePassword}
                                                        variant="standard"
                                                        fullWidth
                                                    />

                                                    <Grid align='left'>
                                                        <Button type='submit' sx={{ m: 1, my: 2, bgcolor: "#32a86f" }} variant='contained'>Sign In</Button></Grid>
                                                    {isLoading && <CircularProgress />}
                                                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                                                    {authError && <Alert severity="error">{authError}</Alert>}
                                                </form>
                                            }
                                            <Typography variant='subtitle1'>Don't have account? <span>

                                                <NavLink to='/register' style={{ textDecoration: 'none', color: '#32a86f' }}>
                                                    Create Now
                                                </NavLink>
                                            </span> </Typography>

                                            <Typography sx={{ my: 2 }}>Or</Typography>
                                            <Button sx={{ m: 1, bgcolor: '#32a86f' }} variant='contained' onClick={handleGoogleSign}>Google Sign In</Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={loginImg} alt="" width='100%' />
                        </Grid>
                    </Grid>
                </Grid>

            </Container >
        </div>

    );
};

export default Login;