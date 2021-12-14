
import React from 'react'
import './style.css'
import logo from '../Img/logo-t.png'
import Burger from './Burger'

export function Header() {

    return (
        <nav className='nav'>
            <div className='left-nav'>
                <img src={logo} alt='logo' id='logo'></img>
            </div>
            <Burger />
        </nav>
    )
}