import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections";
import ImageScroll from "./components/Sections/ImageScroll";
import WomenEthnic from "./components/Dropdown/WomenEthnic";
import WomenWestern from "./components/Dropdown/WomenWestern";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Sections />
      <Routes></Routes>
    </>
  );
}

export default App;
