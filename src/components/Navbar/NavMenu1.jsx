import { Link } from "react-router-dom";
import { Search, User2Icon, ShoppingCart } from "lucide-react";
import ProfileMenu from "./ProfileMenu";  

export default function NavMenu1(){
  return(
    <>
    <div className="Navbar bg-white px-10 h-18 flex font-poppins justify-between items-center ">
        <div className="flex h-19 items-center pl-10 ">
          <Link to={"/"}>
            <img
              className="w-40"
              src="/logo.png"
              alt="MeeStoreLogo"
            />
          </Link>

          <div className="items-center w-155  p-4 ">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-3.5 text-gray-400 w-6.5 h-6.5" />

              <input
                type="text"
                placeholder="Try Saree, Kurti or Search by Product Code"
                className="w-150 h-13 pl-12 pr- py-2 text-gray-600 border border-gray-300 rounded-lg focus:outline-none "
              />
            </div>
          </div>
        </div>

        <div className="NavMenu flex gap-6.5 pr-10 justify-center items-center">
          <Link to={"/supplier"}>
            <p>Become a Supplier</p>
          </Link>
          <span className="w-0.5 h-8 bg-gray-300"></span>

          <Link to={'/investor_relations'}>
            <p>Investor Relations</p>
          </Link>
          <span className="w-0.5 h-8 bg-gray-300"></span>

          <Link className="flex  flex-col items-center">
            <ProfileMenu />
          </Link>

          <Link to={'/cart'} className="flex flex-col items-center">
            <ShoppingCart className="w-5 h-5" />
            <p>Cart</p>
          </Link>
        </div>    
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>

    </>
  )
}