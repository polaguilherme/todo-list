import { BrowserRouter } from "react-router-dom";
import { ListContextProvider } from "./context/ContextList";
import Router from "./Router";

export default function App() {
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
