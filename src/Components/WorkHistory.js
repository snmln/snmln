import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import { positions } from './positions.data.js'

export default function WorkHistory(props) {
    const StyledWork = styled.div`
    .contactContainer{
        dispaly:flex;
        flex-direction: row;
        width: 100%;
            display: -webkit-flex;
    display: -ms-flexbox;
    }
    
    ul{
        list-style-type:none;
        padding: 0;
        margin: 0;
    }

    li{
        padding: 0 0 2rem 0;
    }
   

    @media (max-width: 768px) {
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
        max-width: 100%;

        padding:0;
      }
      }

 
`
    return (
        <StyledWork>
            <div className="contactContainer">

                <div className="title">
                    <h2>Work History</h2>
                </div>
                <div className="information">
                    <ul>
                        {positions.map((position) => (
                            <li>
                                <h2>{position.title}</h2>
                                <h4><a href={position.site} target="_blank">{position.company}</a>  |  {position.time}</h4>
                                <p>{position.description}</p>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </StyledWork>
    )
}
