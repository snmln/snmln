import {createGlobalStyle} from 'styled-components';

export const lightTheme ={
    body: '#fff',
    fontColor: '#000',
    oppositeBody: '#000',
    oppositeFont:'#fff',
    hoverColor: 'rgba(0,0,0,0.5)'
}

export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
    background: "#282729",
    oppositeBody: '#fff',
    oppositeFont:'#000',
    hoverColor: 'rgba(255,255,255,0.5)'

};

export const HighContrastTheme = {
    body: '#1400FF',
    fontColor: '#fff',
    background: "#1400FF",
};
// font-size: 1.75rem;

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body};
    // transition: all 0.7s cubic-bezier(.54,0,.5,1);
    // transition: color 0.7s cubic-bezier(.54,0,.5,1) 0.5s;

    //  -webkit-transition: all 0.7s cubic-bezier(.54,0,.5,1);


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
 transition: all 0.2s cubic-bezier(.54,0,.5,1);
 transition: color 0.2s cubic-bezier(.54,0,.5,1) 0.5s;

  -webkit-transition: all 0.7s cubic-bezier(.54,0,.5,1);
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
    text-decoration: none;
    border-bottom: 1px solid ;
}

a:hover{
    color: inherit; 
    text-decoration: none;
    border-bottom: 3px solid ;
    transition: all 0.2s ;
    -webkit-transition:all 0.2s ;

}

hr{
    border: none;
    border-top: 2px solid;
    margin: 1rem 0;
  }

  .display-1{
      font-size: 40px;
  }
.icon{
    text-decoration: none !important;
 
}
`