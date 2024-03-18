import { BrowserRouter } from "react-router-dom";
import { ListContextProvider } from "./context/ContextList";
import Router from "./Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <ListContextProvider>
          <Router />
        </ListContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
