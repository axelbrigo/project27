import React from 'react'
import './estilos.css'
import pictureburger from '../Img/img-burger.png'
import pictureburguer2 from '../Img/burguer2.jpg'
import pictureburguer3 from '../Img/burguer3.jpg'
import mando from '../Img/mando.png'
import save from '../Img/save.png'



const Playstation3 = () => {



    return (
        <>
            <div className='section-playstation3'>
                <div className='section__img--food'>
                    <img src={pictureburger} alt="burger"></img>
                </div>
                <div className='section__p--food'>
                    <p>THINK ABOUT YOURSELF! HAVE A</p>
                    <p>BURGR!</p>
                    <p>COME HUNGRY.</p>
                    <p>LEAVE HAPPY.</p>
                    <p className='last_word'>BEST BURGR IN TOWN, VOTED BY SOME GUY WHO KIND OF LIKES BURGRS.</p>
                </div>


                <div className='section__p--food2'>
                    <p className='p__title'>ABOUT BURGR</p>
                    <p>We are located in Tromsø center, at Skippergata 6A. All orders, including take</p>
                    <p>Opening hours:</p>
                    <p>Monday – Friday: 15:00 – 21:00</p>
                    <p>Saturday – Sunday: 12 – 21.00</p>
                    <p>Burgr is started by the same loonies who opened <a href='https://www.hildr.no/'>Hildr</a> across the street, you</p>
                    <p>should try them too! </p>
                    <p className='last_word'>Phone number: 94096129</p>
                </div>

                <div className='section__img--food'>
                    <img src={pictureburguer2} alt="burger"></img>
                </div>


                <div className='section__img--food'>
                    <img src={pictureburguer3} alt="burger"></img>
                </div>
                <div className='section__p--food'>
                    <p>BURGRS; SHAKES AND GAMES</p>
                    <p>Retro games and Burgrs, what else do you need?</p>
                    <p><strong>Try our Burgr Time Special!</strong> Come in and see what we have on the board</p>
                    <p className='last_word'>this month, or call us and ask on 940 96 129.</p>
                </div>

                <div className='section__img--last1'>
                    <img src={mando} alt='mando'></img>
                    <h5>Visit</h5>
                    <h3>SKIPPERGATA 6A</h3>
                    <p>9008 Tromsø</p>
                </div>

                <div className='section__img--last2'>
                    <img src={save} alt='save'></img>
                    <h5>Contact</h5>
                    <h3>POST@BURGR.NO</h3>
                    <p>Phone number: 940 96 129</p>
                </div>

            </div>

        </>
    )
}

export default Playstation3