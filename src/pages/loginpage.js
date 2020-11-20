import React, {useState, useEffect} from 'react'
import API from '../utils/API'

export default function Loginpage() {
    const [loginFormState, setLoginFormState] = useState({
        email:"",
        password:""
    })

    const [profileState,setProfilestate]= useState({
        email:"",
        isLoggedin:false

    })

  useEffect(()=>{
      const token = localStorage.getItem("token")
      API.getProfile(token).then(profileData=>{
          if (profileData){
        setProfilestate({
          email:profileData.email,
          isLoggedin:true  
        });
    } else {
        localStorage.removeItem("token")
        setProfilestate({
            email:"",
            isLoggedin:false
        })
    }
    });
  },[])

    const inputChange = event=>{
        const {name,value}=event.target;
        setLoginFormState({
            ...loginFormState,
            [name]:value
        })
    }

    const formSubmit = event=>{
        event.preventDefault();
        API.login({email:loginFormState.email,password:loginFormState.password}).then(newToken=>{
            console.log(newToken);
            localStorage.setItem("token", newToken.token)
            API.getProfile(newToken.token).then(profileData=>{
                console.log(profileData)
                setProfilestate({
                  email:profileData.email,
                  isLoggedin:true  
                });
            });
        })
    }

    return (
        <div className="App" >
            <form onSubmit={formSubmit}>
                <input onChange = {inputChange} value={loginFormState.email} type='text' name='email' placeholder='email' /> 
                <input onChange = {inputChange} value={loginFormState.password}type='password' name='password' placeholder='password' /> 
                <input type='submit' value='login' /> 
            </form>
            
        </div>
    )
}

