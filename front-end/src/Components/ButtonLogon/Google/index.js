import React from 'react'

import { FcGoogle } from 'react-icons/fc'

import './style.css'
/*
facebook: FaFacebook
*/

function ButtonGoogle() {
    return (
        
        <button type="button" className='google_area'>
            <FcGoogle size='40' className='google_icon'/>
        </button>
    )
}

export default ButtonGoogle;