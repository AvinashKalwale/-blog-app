import React from 'react'
import './homepage.css'
function Homepage() {
    return (
        <div className='homepage'>
            <div className='container1'>
                <p id="heading">BlogApp</p>
                <nav>
                <span id='space'> | </span>    <a href="/home/">Home</a><span id='space'> | </span>
                    <a href="/create/">Create</a><span id='space'> | </span>
                </nav>
                <button className='button' type='submit'>LOG OUT</button>
            </div>
        </div>
    )
}

export default Homepage