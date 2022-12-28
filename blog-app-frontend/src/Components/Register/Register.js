import React, { useState } from 'react'
import './register.css'
const Register =()=> {
    const [user, setUser]=useState({
        email:"",
        password:"",
        confirmpassword:""
    })

    const handleChange= e =>{
        const {name, value}=e.target
        // console.log(name,value);
        setUser({
            ...user,
            [name]:value
        })
    }
    
    return (
        <div className='register'>
            <div className='container'>
            {console.log("User",user)}
            <p id="heading">SIGN UP</p>
            <p>Email</p>
                <input className="box"  type="email" name='email' value={user.email}  onChange={handleChange} placeholder='provide email here...' required='required'/>
                <p>Password</p>
                <input className="box" type="password" name='password' value={user.password}  onChange={handleChange}  placeholder='password' required='required'/><br />
                <p>Confirm Password</p>
                <input className="box" type="password" name='confirmpassword' value={user.confirmpassword}  onChange={handleChange}  placeholder='confirm password' required='required'/><br />
                <button type='submit'>SIGN UP</button>
            </div>
        </div>
    )
}

export default Register