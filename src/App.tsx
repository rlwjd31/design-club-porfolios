import GlobalStyle from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import browserRouter from "./routes";
import "./App.css";
import { FC, ReactNode, createContext, useState } from "react";
import imagePaths, { SVGType } from "./constants/images";

type Props = {
  children: ReactNode;
};

type FortuneType = {
  origin: SVGType;
  cracked: SVGType;
  fortuneId: number;
};

type ModalContextType = {
  isOpen: boolean;
  modalOpen: () => void;
  modalClose: () => void;
  selectImage: (imagePath: number) => void;
  fortune: FortuneType;
};

const initialFortune = {
  origin: imagePaths.origin[0],
  cracked: imagePaths.cracked[0],
  fortuneId: 0
};

export const ModalContext = createContext<ModalContextType>({
  fortune: initialFortune,
  isOpen: false,
  modalClose: () => {},
  modalOpen: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectImage: (imagePath) => {},
});

export const ModalContextProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fortune, setFortune] = useState<FortuneType>(initialFortune);

  const modalOpen = () => setIsOpen(true);
  const modalClose = () => setIsOpen(false);
  const selectImage = (currentIndex: number) =>
    setFortune({
      origin: imagePaths.origin[currentIndex],
      cracked: imagePaths.cracked[currentIndex],
      fortuneId: currentIndex
    });

  return (
    <ModalContext.Provider
      value={{ isOpen, modalOpen, modalClose, fortune, selectImage }}
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
