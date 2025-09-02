import { useState } from "react";
import { Link } from "react-router-dom";

function BagsFootwear() {
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
       Bags & Footwear
      </Link>

      {open && (
        <div className="flex absolute w-400 left-19 top-28 bg-white flex-row gap-15 p-4">
          {categories.map((category, i) => (
            <div key={i}>
              <h1 className="text-[#9F2089] leading-10 font-bold mb-2">{category.name}</h1>
              <div className="flex flex-col gap-1">
                {category.subcategories.map((item, j) => (
                  <Link to={`/${item}`}  key={j} className="text-gray-700">
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

export default BagsFootwear;



const categories = [
  {
    name: "Women Bags",
    subcategories: [
      "All Women Bags",
      "Handbags",
      "Clutches",
      "Slingbags",
      "Wallets",
      "Backpacks",
    ],
  },
  {
    name: "Men Bags",
    subcategories: [
      "Men Wallets",
      "Crossbody Bags & Sling Bags",
      "Waist Bags",
    ],
  },
  {
    name: "Travel Bags, Luggage and Accessories",
    subcategories: [
      "View All",
      "Duffel & Trolley Bags",
    ],
  },
  {
    name: "Men Footwear",
    subcategories: [
      "Sports Shoes",
      "Casual Shoes",
      "Formal Shoes",
      "Sandals",
      "Loafers",
    ],
  },
  {
    name: "Women Footwear",
    subcategories: [
      "Flats",
      "View All",
      "Bellies",
      "Heals and Sandals",
      "Boots",
      "Flipflops & Slippers",
    ],
  },
  {
    name: "Kids Footwear",
    subcategories: [
      "View All",
      "Boys Shoes",
      "Girls Shoes",
      "Casual Shoes",
      "Flipflops & Slippers",
    ],
  },
];
