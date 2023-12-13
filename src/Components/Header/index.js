import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header--container'>
            <div className='header--title'>
                <span>PickiT</span>
            </div>
            <div className='header--navigations'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/code-generator'}>Base64 Code Generator</NavLink>
                <NavLink to={'/text-extraction'}>Text Extraction</NavLink>
            </div>
        </div>
    )
}

export default Header