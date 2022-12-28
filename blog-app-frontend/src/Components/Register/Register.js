import React from 'react'
import './register.css'
function Register() {
    return (
        <div className='register'>
            <div className='container'>
            <p id="heading">SIGN UP</p>
            <p>Email</p>
                <input className="box" type="email" placeholder='provide email here...'  required='required'/>
                <p>Password</p>
                <input className="box" type="text" placeholder='password' required='required'/><br />
                <p>Confirm Password</p>
                <input className="box" type="text" placeholder='password' required='required'/><br />
                <button type='submit'>SIGN UP</button>
            </div>
        </div>
    )
}

export default Register