import React from 'react'
import styled from 'styled-components';




const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-left:80px;
  
  
  a {
    padding:5px;
    text-decoration:none;
    color:black;
    padding-top: 25px;
    font-size:0.8em;
  
    
    
  }

  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: -0px;
    height: 301px;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #black;
      text-decoration: none;
      text-align:center;
    }
   
  }
`;

const RightNav = ({ open }) => {
  return (

    <div className='div-container'>
      <Ul open={open}>
        <a href='/'>HOME</a>
        <a href='/menu'>MENU</a>
        <a href='/about'>ABOUT BURGER</a>
        <a href='/register'>REGISTER FOR OFFERS</a>
        <a href='#contact'>CONTACT US</a>
      </Ul>

    </div>


  )
}

export default RightNav