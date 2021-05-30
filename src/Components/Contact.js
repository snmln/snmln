import React from 'react'
import styled from "styled-components";
import {AiFillLinkedin} from "react-icons/ai";
import {AiOutlineDribbble} from "react-icons/ai";
import {AiOutlineCodepen} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";

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
        margin: 0;
    }
  
    ul{
        list-style-type:none;
        padding: 0;
    }
    li{
        padding: 0 2rem 2rem 0; 
       // width: 25%;
        //font-size: 1.5rem;
    }
    .icon{
        border-bottom: 0px solid;
        font-size:3rem;
    }
    a{
        color: inherit; 
        text-decoration: none;
        border-bottom: 0 solid ;
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
                    <h2>Links</h2>
                </div>
                    <ul className="information">
                        <li><a href="https://www.linkedin.com/in/snmln/" target="_blank"><AiFillLinkedin className="icon"/>{/*Linkedin*/}</a></li>
                        {/* <li><a href="https://www.instagram.com/enolam_sean/?hl=en" target="_blank"><AiOutlineInstagram className="icon"/>Instagram</a></li> */}
                        <li><a href="https://github.com/snmln" target="_blank"><AiFillGithub className="icon"/>{/*Github<*/}</a></li>
                        <li><a href="https://codepen.io/your-work/" target="_blank"><AiOutlineCodepen className="icon"/>{/*Codepen*/}</a></li>
                        <li><a href="https://dribbble.com/snmln" target="_blank"><AiOutlineDribbble className="icon"/>{/*Dribbble*/}</a></li>
                    </ul>
            </div>
        </StyledContact>
    )
}
