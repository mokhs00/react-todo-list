import { createGlobalStyle } from "styled-components";
import TodoContainer from "./containers/TodoContainer";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoContainer></TodoContainer>
    </>
  );
}

export default App;
