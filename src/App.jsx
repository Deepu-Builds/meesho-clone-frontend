import { Route, Routes } from "react-router-dom";
import "./App.css";
import ImageScroll from "./components/Sections/ImageScroll";
import WomenEthnic from "./components/Dropdown/WomenEthnic";
import WomenWestern from "./components/Dropdown/WomenWestern";
import Supplier from "./components/Supplier/Supplier";
import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections"
import Error from "./components/pages/Error";

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
