
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Sell Online", path: "/sell-online" },
  { title: "How it works", path: "/how-it-works" },
  { title: "Pricing & Commission", path: "/pricing-commission" },
  { title: "Shipping & Returns", path: "/shipping-returns" },
  { title: "Grow Business", path: "/grow-business" },
  { title: "Don’t have GST?", path: "/no-gst" },
];

function Navbar() {
  return (
    <header className="w-full bg-white  ">
      <div className=" flex justify-around gap-10  w-full px-50 h-24 items-center ">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo2.png"
            alt="meestore-logo"
            className="h-18 object-contain"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex text-sm gap-5 font-bold   text-gray-700">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="hover:text-[#c52eac] transition duration-200"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Login Button */}
        <div className="flex items-center gap-2">
          <Link
            to="/signup"
            className="text-[#3C29B7] border border-[#3C29B7] px-5 py-2 rounded-sm font-medium 
                      hover:bg-[#3C29B7] hover:text-white transition duration-200"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="hover:text-[#3C29B7]  w-34 border hover:border-[#3C29B7] px-5 py-2 rounded-sm font-medium 
                      bg-[#3C29B7] hover:bg-white border-[#3C29B7] text-white transition duration-200"
          >
            Start Selling
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
