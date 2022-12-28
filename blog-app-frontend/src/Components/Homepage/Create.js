import React from 'react'
import './create.css'
function Create() {
    return (
        <div>
            <div className='container2'>
             <div id='marg'>
             <p>Title</p>
                <input className="box" type="email" placeholder='title'  required='required'/>
                <input className='images' type="file" placeholder='Pick Image'/><br/>
                <textarea className='decription' type="text" placeholder='Description'></textarea><br/>
                <button className='button2' type='submit'>Save Post</button>
             </div>                
            </div>
        </div>
    )
}

export default Create