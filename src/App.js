import './App.css';
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, HighContrastTheme, GlobalStyles } from "./themes.js";
import './content.css'
import Switch from './Components/Switch'
import Contact from './Components/Contact'
import WorkHistory from './Components/WorkHistory'
import SampleWork from './Components/samplework'
import Navbar from './Components/Navbar'
import DesignSlides from './Components/designSlides';

function App() {
  const StyledApp = styled.div`
        color: ${(props) => props.theme.fontColor};
        .Content{
          dispaly:inline-flex;
          flex-direction: row;
          width: 100%;
          display: -webkit-flex;
          display: -ms-flexbox;
          flex-wrap: nowrap;
          margin: 2.5rem 0 0 0;
        }
        .Container{
          dispaly:inline-flex;
          flex-direction: row;
          width: 100%;
              display: -webkit-flex;
      display: -ms-flexbox;
      }
        .title{
          max-width: 400px;
          width: 100%;
        }

        .information{
        width: 100%;
        padding:0 0 0 22.4px;
        max-width: 850px;
      }
      
      @media (max-width: 768px) {
        .Content{
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
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const [isToggled, setIsToggled] = useState(false);


  return (
    <div className="main-Container">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>

        <GlobalStyles />
        <StyledApp>

          <Switch
            isToggled={isToggled}
            onToggle={() => { setIsToggled(!isToggled); themeToggler(); }}
            onClick={() => themeToggler()}
            theme={isToggled} />

          {/* <button onClick={() => themeToggler()} > change theme</button> */}
          <div className="Content">
            <div className="title">
              <h1 className="display-1">Hello, My name is <br /> Sean Malone</h1>

            </div>
            <div className="information">
              <p>I'm a Designer and Software Developer with an appetite for complex problems. Currently residing in Columbus, OH as a Senior UI/UX Designer &#38; Front-end Developer @ <a href="https://www.insight.com/en_US/what-we-do/digital-innovation.html" target="_blank" >Insight Digital Innovation.</a></p>

              <p>Always happy to talk about design, dev, and dogs.</p>

              <p>Resume provided on request: <a href="mailto: snmln.dev@gmail.com">snmln.dev@gmail.com</a></p>
            </div>
          </div>
          <hr />
          <SampleWork />
          <hr />
          <WorkHistory />
          <hr />
          {/* <DesignSlides />
          <hr /> */}
          <Contact />

        </StyledApp>
      </ThemeProvider>
    </div>
  );
}

export default App;
