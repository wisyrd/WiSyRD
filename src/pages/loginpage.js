import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import { Box, Button, Text } from 'rebass';
import { Input } from '@rebass/forms'
import { Flex } from 'reflexbox'
import { Link } from "react-router-dom";

export default function Loginpage() {
    const [loginFormState, setLoginFormState] = useState({
        email: "",
        password: ""
    })

    const [profileState, setProfilestate] = useState({
        email: "",
        isLoggedin: false

    })

    useEffect(() => {
        const token = localStorage.getItem("token")
        API.getProfile(token).then(profileData => {
            if (profileData) {
                setProfilestate({
                    email: profileData.email,
                    isLoggedin: true
                });
            } else {
                localStorage.removeItem("token")
                setProfilestate({
                    email: "",
                    isLoggedin: false
                })
            }
        });
    }, [])

    const inputChange = event => {
        const { name, value } = event.target;
        setLoginFormState({
            ...loginFormState,
            [name]: value
        })
    }

    const formSubmit = event => {
        event.preventDefault();
        API.login({ email: loginFormState.email, password: loginFormState.password }).then(newToken => {
            console.log(newToken);
            sessionStorage.setItem("token", newToken.token)
            API.getProfile(newToken.token).then(profileData => {
                sessionStorage.setItem("username", profileData.username)
                console.log(profileData)
                setProfilestate({
                    email: profileData.email,
                    isLoggedin: true
                });
                window.location.href = "/user"
            });
        })
    }

    return (
        <Box className="App" variant='dashboard'>
            <form onSubmit={formSubmit}>
                    <Flex>
                    <Box variant='frontEndForm'>
                        <Text variant='ingestionLabel'>Login to Wisyrd</Text>
                        <Text variant='ingestionText'>Use your Wisyrd credentials to login below</Text>
                        <Input onChange={inputChange} value={loginFormState.email} type='text' name='email' placeholder='email' />
                        <Input onChange={inputChange} value={loginFormState.password} type='password' name='password' placeholder='password' />
                        <Input type='submit' value='login' />
                        <Box variant='dashboardCharacter'>
                            <Link to="/register">Need a new account? Click here.</Link>
                        </Box>
                    </Box>
                </Flex>   
            </form>
        </Box>
    )
}

