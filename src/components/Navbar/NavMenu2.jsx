import { Link } from "react-router-dom";
import WomenEthnic from "../Dropdown/WomenEthnic";
import WomenWestern from "../Dropdown/WomenWestern";
import Men from "../Dropdown/Men";
import Kids from "../Dropdown/Kids";
import HomeKitchen from "../Dropdown/HomeKitchen";
import Jewellery from "../Dropdown/Jewellery";
import BagsFootwear from "../Dropdown/BagsFootwear";
import Electronics from "../Dropdown/Electronics";
import SportsFitness from "../Dropdown/SportsFitness";
import CarBike from "../Dropdown/CarBike";
import OfficeSupply from "../Dropdown/OfficeSupply";
import Pet from "../Dropdown/Pet";
import FoodsDrinks from "../Dropdown/FoodsDrinks";
import Music from "../Dropdown/Music";
import Books from "../Dropdown/Books";

export default function NavMenu2() {
  return (
    <nav className="w-full h-10 bg-white shadow-sm border-b">
      <div className="flex space-x-6 overflow-x-auto no-scrollbar scroll-hide scroll-smooth px-10 py-3">
        <WomenEthnic />
        <WomenWestern />
        <Men />
        <Kids />
        <HomeKitchen />
        <Jewellery />
        <BagsFootwear />
        <Electronics />
        <SportsFitness />
        <CarBike />
        <OfficeSupply />
        <Pet />
        <FoodsDrinks />
        <Music />
        <Books />
      </div>
    </nav>
  );
}
