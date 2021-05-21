import {createGlobalStyle} from 'styled-components';

export const lightTheme ={
    body: '#fff',
    fontColor: '#000'
}

export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
    background: "#282729"
};

export const HighContrastTheme = {
    body: '#1400FF',
    fontColor: '#fff',
    background: "#1400FF"
};
// font-size: 1.75rem;

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body};
    -webkit-transition:all 0.7s cubic-bezier(.53,0,.51,1.01);
    transition: all 0.7s cubic-bezier(.53,0,.51,1.01);
    // -webkit-transition: background-color 1s cubic-bezier(.53,0,.51,1.01);
    // -webkit-transition: color 1.5s cubic-bezier(.53,0,.51,1.01);


    font-family: Pitch,monospace;
    letter-spacing: -.01rem;
    -ms-font-feature-settings: "kern";
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern";
    -webkit-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern=1";
    -webkit-font-kerning: normal;
    font-kerning: normal;
}
p{
    font-family: Pitch,monospace;
    letter-spacing: -.01rem;
    -ms-font-feature-settings: "kern";
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern";
    -webkit-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern=1";
    -webkit-font-kerning: normal;
    font-kerning: normal;
 margin-top: 0;
}
h1{
    letter-spacing: -.01rem;
    -ms-font-feature-settings: "kern";
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern";
    -webkit-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern";
    -moz-font-feature-settings: "kern=1";
    -webkit-font-kerning: normal;
    font-kerning: normal;

}
h1, h2, h3, h4, h5, h6{
    font-family: NYCTA,sans-serif;
    font-weight: 700; 
    padding: 0 0 1rem 0;
    margin:0;
}

a{
    color: inherit; 
    text-decoration: underline;
    
}

hr{
    border: none;
    border-top: 2px solid;
    margin: 1rem 0;
  }

  .display-1{
      font-size: 40px;
  }

`