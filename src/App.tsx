import Input from "./components/Input";
import { ListContextProvider } from "./context/ContextList";

function App() {
  return (
    <>
      <ListContextProvider>
        <Input />
      </ListContextProvider>
    </>
  );
}

export default App;
