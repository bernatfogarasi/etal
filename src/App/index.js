import styled from "styled-components";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Root from "./Root";
import GlobalStyle from "style/globalStyle";
import About from "./About";
import Friss from "./Latest";
import { KotetContext } from "context";
import Books from "./Books/Root";
import kotetek from "data/books";
import Book from "./Books/Book";
import { bookSubfolder, bookTitle } from "functions/parse";

const Wrapper = styled.div``;

const App = ({ className }) => {
  const navigate = useNavigate();
  return (
    <Wrapper className={className}>
      <GlobalStyle />
      <KotetContext.Provider value={{ kotetek: [1, 2, 3] }}>
        <Routes>
          <Route element={<Root />} path="/" />
          <Route element={<About />} path="/rolunk" />
          <Route element={<Friss />} path="/friss" />
          <Route element={<Books />} path="/kotetek"></Route>
          {Object.entries(kotetek).map(([bookFolderName, bookContents]) => (
            <Route
              key={bookFolderName}
              element={
                <Book folderName={bookFolderName} contents={bookContents} />
              }
              path={`/kotetek/${bookSubfolder(bookFolderName)}`}
            />
          ))}
          {/* <Route element={html.default.work} path="/vampir" /> */}

          <Route render={() => navigate("/")} />
        </Routes>
      </KotetContext.Provider>
    </Wrapper>
  );
};

export default App;
