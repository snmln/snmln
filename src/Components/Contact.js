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
    .information{
        display: flex;
        flex-wrap: wrap;
    }
  
    ul{
        list-style-type:none;
        padding: 0;
    }
    li{
        padding: 0 0 2rem 0; 
        width: 33%;
        font-size: 1.5rem;
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

        li{
            padding: 0 1rem 2rem 0; 
            font-size: 1.5rem;
        }
    }
`
    return (
        <StyledContact>
            <div className="contactContainer">

                <div className="title">
                    <h2>Contact</h2>
                </div>
                    <ul className="information">
                        <li><a href="https://www.linkedin.com/in/snmln/" target="_blank">Linkedin</a></li>
                        <li><a href="https://www.instagram.com/enolam_sean/?hl=en" target="_blank">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/snmln/" target="_blank">Github</a></li>
                        <li><a href="https://codepen.io/your-work/" target="_blank">Codepen</a></li>
                        <li><a href="https://dribbble.com/snmln" target="_blank">Dribbble</a></li>
                    </ul>
            </div>
        </StyledContact>
    )
}
