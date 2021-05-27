import React, { Component } from 'react'
// import './Switch.css'
import styled from "styled-components";


function Switch({ isToggled, onToggle, theme }) {
    const StyledToggle = styled.div`

   
    .switch{
        position: relative;
        display: inline-block;
        width: 40px;
        height: 24px;
 
        border: 2px solid ${(props) => props.theme.fontColor};
        border-radius: 34px;

    }
    
    .switch input{
        opacity: 0;
        width: 0;
        height: 0;

    }
    
    .slider{
        position: absolute; 
        cursor: pointer; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        border: 1px ${(props) => props.theme.fontColor};
        border-radius: 34px;
      
    }
    
    .slider:before{
        position: absolute;
        content:"";
        height:17px;
        width: 17px;
        left: 4px;
        bottom: 4px;
        background-color: ${(props) => props.theme.fontColor};
        border-radius: 34px;

    }
    
    input:checked + .slider:before{
        transform: translateX(15px);

    }
    
    input:checked + .slider{

 
    }
    .toggleStateCopy{
        display: inline;
        padding: 0 0 0 .25rem;
    }
    //  .navbar {
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

    transition: all 0.7s cubic-bezier(.54,0,.5,1);
    transition: color 0.7s cubic-bezier(.54,0,.5,1) 0.5s;

     -webkit-transition: all 0.7s cubic-bezier(.54,0,.5,1);
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
    }
  
    .nav-menu.active {
      left: 0;
      opacity: 1;
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
    }
  
    .nav-links-mobile:hover {
      color: #242424;
    }
  }
`


    return (
        <StyledToggle>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <label className="switch">
                        <input type="checkbox" checked={isToggled} onChange={onToggle} />
                        <span className="slider " />
                    </label>
                    {theme ? <h5 className="toggleStateCopy"> Toggle Light</h5> : <h5 className="toggleStateCopy"> Toggle Dark</h5>}
                </div>
            </nav>
        </StyledToggle>

    )
}
export default Switch;