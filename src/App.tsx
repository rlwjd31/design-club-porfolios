import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
