import React from 'react'
import styled from "styled-components";
import { projects } from './Projects'
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function card(props) {
    const StyledCard = styled.div`
    .column {
      display: -webkit-flex;
      display: -ms-flexbox;     
      dispaly:inline-flex;
      flex-direction: row;   
      flex-wrap: wrap;
      box-sizing: border-box;

    }
   
    .row {
    }
    
.cardContent{
    padding: 16px 0 50px 0;
}

.card {
        max-width: 250px;
        width: 100%;
        height: 300px;
        margin:0 30px 22.4px 0 ;
        border-top: 2px solid;
        border-bottom: 2px solid;
        box-sizing: border-box;
        position:relative;
    }
    .card:hover {
        border-top: 6px solid;
        border-bottom: 6px solid;
        -webkit-transition:all 0.1s cubic-bezier(.53,0,.51,1.01);
        transition: all 0.1s cubic-bezier(.53,0,.51,1.01);
    }
    .explore{
        position: absolute;
        bottom: 0;
        width: 100%;
       background-color: transparent;
       color: ${(props) => props.theme.fontColor} ;
       text-align: left !important;
       padding: 0;
       margin: 0;
       text-decoration: underline;
       -webkit-transition:all 0.7s cubic-bezier(.53,0,.51,1.01);
       transition: all 0.7s cubic-bezier(.53,0,.51,1.01);
       padding: .5rem 0;
    }
    
    .arrow{
        font-size: 3rem;
    }
    a{
        color: inherit; 
        text-decoration: none;
        border-bottom: 0 solid ;
                box-sizing: border-box;
                margin: 0 1rem 0 0;

    }
   
    .links{
        color: inherit; 
        text-decoration: none;
        border-bottom: 0 solid ;
        font-size: 3rem;
        box-sizing: border-box;
       }

    //    .links:hover{
    //     -webkit-transition:all 0.2s cubic-bezier(.53,0,.51,1.01);
    //     transition: all 0.2s cubic-bezier(.53,0,.51,1.01);
    //     box-sizing: border-box;
    //     //color: ${(props) => props.theme.hoverColor} ;
    //    }
@media screen and (max-width: 768px) {
    .column {
        dispaly:inline-flex;
        flex-direction: column;
        width: 100%;
        display: -webkit-flex;
        display: -ms-flexbox;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding:0;
      }

      .card {
        margin:0 0 22.4px 0 ;
        border-top: 1px solid;
        border-bottom: 0px solid;
        width: 100%;
        height:100%;
        max-width: 100%;
    }
    .explore{
        position: relative;
        bottom: 0;
       width: 100%;
      // background-color: ${(props) => props.theme.oppositeBody};
      // color: ${(props) => props.theme.oppositeFont};
      // text-align: right !important;
      padding: 16px  0;
      text-decoration: underline;
       box-sizing: border-box;
       -webkit-transition:all 0.7s cubic-bezier(.53,0,.51,1.01);
       transition: all 0.7s cubic-bezier(.53,0,.51,1.01);
       
    }
    .arrow{
        font-size: 1.5rem;
    }
    .links{
        color: inherit; 
        text-decoration: none;
        border-bottom: 0 solid ;
        font-size: 4rem;
        margin: 0 .5rem 0 0;
        box-sizing: border-box;
       }
       .cardContent{
        padding: 16px  0 0 0;
    }
}
`  


    return (
        <StyledCard>
            <div class="row">
                <div class="column">
                    {projects.map((project) => (
                        <a class="card">
                            <div class="cardContent">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                            <div className="explore">
                                <a href={project.site} target="_blank" >
                                    <BsArrowRightShort className="links" /></a>
                                { project.Github ? <a href={project.Github} target="_blank" >
                                    <AiFillGithub className="links"/> 
                                </a> : null}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </StyledCard>
    )
}

export default card
