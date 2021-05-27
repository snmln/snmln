import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css'
import Switch from './Switch'
import styled, { ThemeProvider } from "styled-components";

function Navbar() {


  const StyledNav = styled.div`
//   .navbar {
    height: 80px;
    display: flex;
    justify-content: roght;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    border-bottom: 2px solid;
    margin-bottom: 11.2px;
    background-color: ${(props) => props.theme.body};
    // transition: all 0.7s;
    // -webkit-transition:all 0.7s;
  }
  
  .navbar-container {
    display: flex;
    justify-content: center;
   align-items: center;
    height: 80px;
    max-width: 1500px;
  }
  
  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
  
  .fa-typo3 {
    margin-left: 0.5rem;
    font-size: 1.8rem;
  }
  
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
  }
  
  .nav-item {
    height: 80px;
  }
  
  .nav-links {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
  }
  
  .nav-links:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }
  
  .fa-bars {
    color: #fff;
  }
  
  .nav-links-mobile {
    display: none;
  }
  
  .menu-icon {
    display: none;
  }
  
  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }
  
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
  
    .nav-menu.active {
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
  
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
  
    .nav-links:hover {
      color: #242424;
      border-radius: 0;
    }
  
    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }
  
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
  
    .fa-times {
      color: #fff;
      font-size: 2rem;
    }
  
    .nav-links-mobile {
      display: block;
      text-align: center;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      text-decoration: none;
      font-size: 1.5rem;
      color: #fff;
      padding: 14px 20px;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
    }
  
    .nav-links-mobile:hover {
      color: #242424;
      transition: 250ms;
    }
  }
`

  return (

    <StyledNav>
      <nav className='navbar'>
        <div className='navbar-container'>
        <Switch
            />
         
          
        </div>
      </nav>
      </StyledNav>
  );
}

export default Navbar;