import React from 'react'
import styled, { ThemeProvider } from "styled-components";
import { withTheme } from 'styled-components'

import { designs } from './designWork.data.js'


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
.DesignDetails{
    display: inline-block;
}
.collapsible {
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
  }
  
  .active, .collapsible:hover {
    background-color: #555;
  }
  
  .content {
    padding: 0 18px;
    display: none;
    overflow: hidden;
    background-color: #f1f1f1;
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
`;

export default class DesignSlides extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <StyledWork>
                <div className="contactContainer">

                    <div className="title">
                        <h2>Design Work</h2>
                    </div>

                    <div className="information" onClick={(e) => this.togglePanel(e)}>
                        {designs.map((design) => (
                            <h2>{design.title}</h2>

                        // this.state.open ? (
                        //         <ul>
                        //             <div class="DesignContainer">
                        //                 <img src="https://via.placeholder.com/550x370" />
                        //                 <li class="DesignDetails">
                        //                     <h2>{design.title}</h2>
                        //                     <h4><a href={design.site} target="_blank">{design.company}</a>  |  {design.time}</h4>
                        //                     <p>{design.description}</p>
                        //                 </li>
                        //             </div>


                        //         </ul>
                        //     ) : null
                        ))
                        }
                    </div>
                </div>
            </StyledWork>
        )
    }
}