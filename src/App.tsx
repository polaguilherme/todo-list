import Input from "./components/Input";
import { ListContextProvider } from "./context/ContextList";

function App() {
  return (
    <>
      <h1 className="font-bold font-sans text-2xl flex items-center justify-center mt-5">
        Lista de afazeres
      </h1>

      <ListContextProvider>
        <Input />
      </ListContextProvider>
    </>
  );
}

export default App;
