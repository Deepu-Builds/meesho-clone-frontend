import { Route, Routes } from "react-router-dom";
import "./App.css";
import Supplier from "./components/Supplier/Supplier";
import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections";
import Error from "./pages/Error";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<> <Navbar/> <Sections/> </> }/>
    <Route path="/supplier" element={<Supplier/>}/>
    <Route path="*" element={<> <Error/> </>}/>
    </Routes>
    </>
  );
}

export default App;
