import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./routes";
import "./App.css";
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type ModalContextType = {
  isOpen: boolean;
  modalOpen: () => void;
  modalClose: () => void;
  imagePath: string;
  selectImage: (
    imagePath: string
  ) => ReturnType<Dispatch<SetStateAction<string>>>;
};

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  modalClose: () => {},
  modalOpen: () => {},
  imagePath: "",
  selectImage: (imagePath: string) => "",
});

export const ModalContextProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<string>("");

  const modalOpen = () => setIsOpen(true);
  const modalClose = () => setIsOpen(false);
  const selectImage = (imagePath: string) => setImagePath(imagePath);

  return (
    <ModalContext.Provider
      value={{ isOpen, modalOpen, modalClose, imagePath, selectImage }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalContextProvider>
        <RouterProvider router={browserRouter} />
      </ModalContextProvider>
    </>
  );
}

export default App;
