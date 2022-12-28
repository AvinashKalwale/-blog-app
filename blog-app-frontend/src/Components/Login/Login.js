import React, { useState } from 'react'
import './login.css'
import axios from "axios"
function Login({ setLoginUser}) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:8080/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)       
        })
    }
    return (
        
        <div className='login'>
            <div className='container'>
            {console.log("User",user)}
                <p id="heading">Login</p>
                <p>Email</p>
                <input className="box" type="email" name="email" value={user.email} onChange={handleChange} placeholder='provide email here...' required='required' />
                <p>Password</p>
                <input className="box" type="password" name="password" value={user.password} onChange={handleChange} placeholder='password' required='required' /><br />
                <div className='inline' ><input className='inline' type="checkbox"/>Remember me?</div> <br/>
                <button type='submit' onClick={login}>LOGIN</button>
                <p id='forget'>Forget Password?</p>
                <div className='center'>
                    <p>Need an account?
                        <a href='register'> SIGN UP</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login