import React from 'react'
import './style.css'
import facebook from '../Img/facebook.png'
import instagram from '../Img/instagram.png'



const Footer = () => {



    return (
        <div className='footer'>
            <div className='footer__left'>
                <p>WEBLØSNING AV ADLEVO</p>
            </div>

            <div className='footer__right'>
                <a href='https://www.facebook.com'><img src={facebook} alt='facebook icon'></img></a>
                <a href='https://www.instagram.com/axelbrigook'><img src={instagram} alt='instagram icon'></img></a>
            </div>
        </div>
    )
}

export default Footer