import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./routes";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;

// ! text-outline-css => https://kinsta.com/blog/css-text-outline/
// ! requestAnimationFrame => https://codepen.io/HunorMarton/pen/EqmyMN
// ! 언어별 폰트 지정 방법(unicode-range) => https://velog.io/@kimheewon/%ED%95%9C%EA%B8%80-%EC%98%81%EC%96%B4-%EC%88%AB%EC%9E%90-%EC%84%9C%EB%A1%9C-%EB%8B%A4%EB%A5%B8-%ED%8F%B0%ED%8A%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0unicode-range-8fi3p345
// ! 글씨 깜빡거림 이슈 by createGlobalStyle => https://ryublock.tistory.com/37
