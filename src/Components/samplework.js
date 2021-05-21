import React from 'react'
import styled, { ThemeProvider } from "styled-components";

function samplework() {
    const StyledCards = styled.div`
    
    .contactContainer{
        dispaly:flex;
        flex-direction: row;
        width: 100%;
            display: -webkit-flex;
    display: -ms-flexbox;
    }
    
    .Cards{
       max-width: 75%;
        margin: 0;
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
        <StyledCards>
            <div className="Container">

                <div className="title">
                    <h2>Work Sample</h2>
                </div>
                <div className="Cards">
                  
                </div>
            </div>
        </StyledCards >

    )
}

export default samplework
