import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import Card from './card'

function samplework() {
    const StyledCards = styled.div`
    
    .Container{
        dispaly:inline-flex;
        flex-direction: row;
        width: 100%;
            display: -webkit-flex;
    display: -ms-flexbox;
    }
    
    .Cards{
       max-width: 75%;
        margin: 0;
    }

    @media (max-width: 768px) {
        .Container{
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

        padding:22.4px 0 0 0;
      }
      }
`
    return (
        <StyledCards>
            <div className="Container">

                <div className="title">
                    <h2>Work Sample</h2>
                </div>
                <div className="information">
                    <Card />
                </div>
            </div>
        </StyledCards >

    )
}

export default samplework
