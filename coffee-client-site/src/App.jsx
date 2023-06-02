import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useLoaderData } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
