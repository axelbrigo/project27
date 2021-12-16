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
        <a href='#logo'>HOME</a>
        <a href='#logo'>MENU</a>
        <a href='#logo'>ABOUT BURGER</a>
        <a href='#logo'>GIFT CARD</a>
        <a href='#logo'>CONTACT US</a>
      </Ul>

    </div>


  )
}

export default RightNav