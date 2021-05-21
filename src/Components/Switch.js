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
    
`


    return (
        <StyledToggle>
   
                    <label className="switch">
                        <input type="checkbox" checked={isToggled} onChange={onToggle} />
                        <span className="slider " />
                    </label>
                    {theme ? <h5 className="toggleStateCopy"> Toggle Light</h5> : <h5 className="toggleStateCopy"> Toggle Dark</h5>}
      
        </StyledToggle>

    )
}
export default Switch;