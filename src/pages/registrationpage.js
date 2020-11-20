import React, {useState} from 'react'
import API from '../utils/API'

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
        <div className="App" >
            <form onSubmit={formSubmit}>
                <input onChange = {inputChange} value={createFormState.username} type='text' name='username' placeholder='username' /> 
                <input onChange = {inputChange} value={createFormState.email} type='text' name='email' placeholder='email' /> 
                <input onChange = {inputChange} value={createFormState.password}type='password' name='password' placeholder='password' /> 
                <input type='submit' value='Create Account' /> 
            </form>
            
        </div>
    )
}

