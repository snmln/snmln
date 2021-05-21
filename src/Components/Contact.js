import React from 'react'
import styled, { ThemeProvider } from "styled-components";

export default function Contact() {
    const StyledContact = styled.div`
    .contactContainer{
        dispaly:inline-flex;
        flex-direction: row;
        width: 100%;
            display: -webkit-flex;
    display: -ms-flexbox;
    }
    
    .information{
       max-width: 75%;

    }
    ul{
        list-style-type:none;
        padding: 0;
    }
 
`
    return (
        <StyledContact>
            <div className="contactContainer">

                <div className="title">
                    <h2>Contact</h2>
                </div>
                <div className="information">
                    <ul>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                        <li>Github</li>
                        <li>Codepen</li>
                        <li>Dribbble</li>
                    </ul>
                </div>
            </div>
        </StyledContact>
    )
}
