import React, {useState} from 'react'
import API from '../utils/API'
import { Box, Button, Card, Heading, Text } from 'rebass';
import { Input, Label, Checkbox } from '@rebass/forms'
import { Flex } from 'reflexbox'

export default function Registrationpage() {
  
    const [createFormState, setCreateFormState] = useState({
        username:"",
        email:"",
        password:""
    })

    const inputChange = event=>{
        const {name,value}=event.target;
        setCreateFormState({
            ...createFormState,
            [name]:value
        })
    }

    const formSubmit = event=>{
        event.preventDefault();
        API.create({username:createFormState.username, email:createFormState.email,password:createFormState.password}).then(newUser=>{
            console.log(newUser); 
                setCreateFormState({
                    username:"",
                    email:"",
                    password:"" 
                });
            });
        }
    


    return (
        <Box className="App" >
            <form onSubmit={formSubmit}>
                <Flex>
                    <Box variant='centeringBox'></Box>
                    <Box variant='frontEndForm'>
                    <Text variant='ingestionLabel'>Create a new Wisyrd account</Text>
                            <Text variant='ingestionText'>Please input the requested information below to create your Wisyrd account</Text>
                        <Input onChange = {inputChange} value={createFormState.username} type='text' name='username' placeholder='username' /> 
                <Input onChange = {inputChange} value={createFormState.email} type='text' name='email' placeholder='email' /> 
                <Input onChange = {inputChange} value={createFormState.password}type='password' name='password' placeholder='password' /> 
                <Input type='submit' value='Create Account' />
                    </Box>
                </Flex> 
            </form>
        </Box>
    )
}

