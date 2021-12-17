import React from 'react'
import './style.css'
import winner1 from '../Img/winner1.png'
import winner2 from '../Img/winner2.png'


const Stage = () => {



    return (
        <>
            <div id='home' className='background-img'>

                <h4>THE ONLY BURGER IN TOWN</h4>
                <p>BURGER</p>
                <img src={winner1} alt="Best Burger"></img>
                <img src={winner2} alt="Award Burger"></img>
            </div>


        </>
    )
}

export default Stage