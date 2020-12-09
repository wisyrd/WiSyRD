import React, { useState } from 'react'
import API from '../utils/API'
import { Box, Button, Text } from 'rebass';
import { Input } from '@rebass/forms'
import { Flex } from 'reflexbox'
import { Link } from "react-router-dom";

export default function Registrationpage() {

    const [createFormState, setCreateFormState] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [feedbackState, setFeedbackState] = useState("")

    const inputChange = event => {
        const { name, value } = event.target;
        setCreateFormState({
            ...createFormState,
            [name]: value
        })
    }

    const formSubmit = event => {
        event.preventDefault();
        if (createFormState.password != createFormState.passwordConfirm)
        {
            setFeedbackState("Your typed password and confirmed password do not match.")
        }
        else if (createFormState.password == createFormState.passwordConfirm)
        {
            let lowercaseEmail = createFormState.email.toLowerCase();
            API.create({ username: createFormState.username, email: lowercaseEmail, password: createFormState.password }).then(newUser => {
                console.log(newUser);
                setCreateFormState({
                    username: "",
                    email: "",
                    password: "",
                    passwordConfirm: ""
                });
                // window.location.href = "/"
            });
        }
    }



    return (
        <Box className="App" variant='dashboard' >
            <form onSubmit={formSubmit}>
                <Flex>
                    <Box variant='frontEndForm'>
                        <Text variant='ingestionLabel'>Create a new Wisyrd account</Text>
                        <Text variant='ingestionText'>Please input the requested information below to create your Wisyrd account</Text>
                        <Text variant="ingestionLabel">{feedbackState}</Text>
                        <Input onChange={inputChange} value={createFormState.username} type='text' name='username' placeholder='username' />
                        <Input onChange={inputChange} value={createFormState.email} type='text' name='email' placeholder='email' />
                        <Input onChange={inputChange} value={createFormState.password} type='password' name='password' placeholder='password' />
                        <Input onChange={inputChange} value={createFormState.passwordConfirm} type='password' name='passwordConfirm' placeholder='confirm password' />
                        <Input type='submit' value='Create Account' />
                    </Box>
                </Flex>
            </form>
            <Link to="/"><Button>Back to Login</Button></Link>
        </Box>
    )
}

