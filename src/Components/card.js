import React from 'react'
import styled from "styled-components";
import { projects } from './Projects'

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
    padding: 16px 0;
}

.card {
        width: 200px;
        height: 500px;
        margin:0 30px 22.4px 0 ;
        border-top: 2px solid;
        border-bottom: 2px solid;
        box-sizing: border-box;
    }
    .card:hover {
            border-top: 6px solid;
        border-bottom: 6px solid;
        // background-color: rgba(237, 237, 237,100);
        -webkit-transition:all 0.1s cubic-bezier(.53,0,.51,1.01);
        transition: all 0.1s cubic-bezier(.53,0,.51,1.01);}
.explore{
    postion: absolute;
bottom: 0;
}
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
        border-top: 2px solid;
        border-bottom: 2px solid;
        width: 100%;
        height:100%;
    }
    }
    
   
`
    return (
        <StyledCard>
            <div class="row">
                <div class="column">
                    {projects.map((project) => (
                        <a href={project.site} class="card" target="_blank">
                            <div class="cardContent">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                            <p className="explore">explore</p>
                        </a>
                    ))}
                </div>
            </div>
        </StyledCard>
    )
}

export default card
