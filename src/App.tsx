import { BrowserRouter } from "react-router-dom";

import { ListContextProvider } from "./context/ContextList";
// import Router from "./Router";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <ListContextProvider>
          <Home />
        </ListContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
