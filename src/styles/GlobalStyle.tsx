import { createGlobalStyle } from "styled-components";
import NeueHaasGroteskFont from "../assets/fonts/Neue-Haas-Grotesk.ttf";

export const commonStyle = {
  padding: {
    main: "1.563rem",
  },
};

// ! NeueHaasGroteskFont font를 src:url('../assets/fonts/Neue-Haas-Grotesk.ttf')로 import하면 decode fail이라고 뜬다.
// ! 이는 vite에서 ES Module bundler를 사용하기 때문에 자원을 import하여 처리한 후 할당해주는 방식으로 해야한다.
const GlobalStyle = createGlobalStyle`
  /* english custom fonts */
  
  @font-face {
    font-family: 'Neue Haas Grotesk';
    src: url(${NeueHaasGroteskFont}) format('truetype');
  }

  * {
    margin: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    font-family: 'Noto Sans Kr', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1;
  }
  body:lang(en){
    font-family: 'Neue Haas Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
