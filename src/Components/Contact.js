import React from 'react'
import styled from "styled-components";

export default function Contact() {
    const StyledContact = styled.div`
    .contactContainer{
        dispaly:inline-flex;
        flex-direction: row;
        width: 100%;
            display: -webkit-flex;
    display: -ms-flexbox;
    }
    
  
    ul{
        list-style-type:none;
        padding: 0;
    }
    @media screen and (max-width: 768px) {
        .contactContainer{
            dispaly:inline-flex;
            flex-direction: column;
            width: 100%;
            display: -webkit-flex;
            display: -ms-flexbox;
            flex-wrap: wrap;
  
          }
          .title{
            width: 100%;
          }
  
          .information{
          width: 100%;
          padding:0;
        }
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
