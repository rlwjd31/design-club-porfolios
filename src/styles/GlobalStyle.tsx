import { createGlobalStyle } from "styled-components";
// import NeueHaasGroteskDisplayProFont from "/assets/fonts/Neue-Haas-Grotesk-Display-Pro.ttf";

export const commonStyle = {
  padding: {
    main: "1.563rem",
  },
  fontSize: {
    xxxl: "6rem", // * 96px
    xxl: "4.625rem", // * 74px
    xl: "4.rem", // * 64px
    x: "2.5rem", // * 40px
    l: "2.25rem", // * 36px
    m: "2rem", // * 32px
    s: "1.25rem", // * 20px
  },
};

24

// ! NeueHaasGroteskFont font를 src:url('../assets/fonts/Neue-Haas-Grotesk.ttf')로 import하면 decode fail이라고 뜬다.
// ! 이는 vite에서 ES Module bundler를 사용하기 때문에 자원을 import하여 처리한 후 할당해주는 방식으로 해야한다.
const GlobalStyle = createGlobalStyle`
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
