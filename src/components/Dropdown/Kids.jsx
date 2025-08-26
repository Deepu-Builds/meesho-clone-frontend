import { useState } from "react";
import { Link } from "react-router-dom";

function Kids() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className=""
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={"/"}
        className="whitespace-nowrap text-[#353543] hover:text-[#9F2089] hover:cursor-pointer hover:border-b-3 border-[#9F2089] duration-150 pb-1"
      >
        Kids
      </Link>

      {open && (
        <div className="flex absolute w-400 left-19 top-28 bg-white flex-row gap-15 p-4">
          {categories.map((category, i) => (
            <div key={i}>
              <h1 className="text-[#9F2089] leading-10 font-bold mb-2">{category.label}</h1>
              <div className="flex flex-col gap-1">
                {category.items.map((item, j) => (
                  <Link key={j} className="text-gray-700">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Kids;
  
  
  const categories = [
    {
      label: "Boys & Girls 2+ Years",
      items: ["Dresses", "Boys Sets", "Girls Sets", "Ethnicwear", "Nightwear", "Winter Wear", "Top Wear", "Bottomwear"]
    },
    {
      label: "Infant 0-2 Years",
      items: ["Rompers", "Baby Sets", "Ethnicwear"]
    },
    {
      label: "Toys & Accessories",
      items: ["Soft Toys", "Footwear", "Stationery", "Watches", "Bags & Backpacks"]
    },
    {
      label: "Baby Care",
      items: ["Baby Bedding & Accessories", "All Baby Care", "Newborn Care"]
    }
  ];