import React from 'react'
import './login.css'
function Login() {
    return (
        <div className='login'>
            <div className='container'>
                <p id="heading">Login</p>
                <p>Email</p>
                <input className="box" type="email" placeholder='provide email here...'  required='required'/>
                <p>Password</p>
                <input className="box" type="text" placeholder='password' required='required'/><br />
                <div className='inline' ><input className='inline' type="checkbox" />Remember me?</div> <br />
                <button type='submit'>LOGIN</button>
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