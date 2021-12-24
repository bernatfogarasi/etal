import styled from "styled-components";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Root from "./Root";
import GlobalStyle from "style/globalStyle";
import Rolunk from "./Rolunk";
import Friss from "./Friss";
import Kötetek from "./Kötetek";
import { KotetContext } from "context";
import Kötet from "./Kötetek/Kötet";

const Wrapper = styled.div``;

const App = ({ className }) => {
  const navigate = useNavigate();
  return (
    <Wrapper className={className}>
      <GlobalStyle />
      <KotetContext.Provider value={{ kotetek: [1, 2, 3] }}>
        <Routes>
          <Route element={<Root />} path="/" />
          <Route element={<Rolunk />} path="/rolunk" />
          <Route element={<Friss />} path="/friss" />
          <Route element={<Kötetek />} path="/kotetek"></Route>
          {/* <Route element={html.default.work} path="/vampir" /> */}

          <Route render={() => navigate("/")} />
        </Routes>
      </KotetContext.Provider>
    </Wrapper>
  );
};

export default App;
