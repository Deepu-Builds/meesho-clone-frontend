import { useState } from "react";
import { Link } from "react-router-dom";

function Jewellery() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={"/"}
        className="whitespace-nowrap text-[#353543] hover:text-[#9F2089] hover:cursor-pointer hover:border-b-3 border-[#9F2089] duration-150 pb-1"
      >
        Jewellery & Accessories
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

export default Jewellery;




const categories = [
  {
    name: "Jewellery",
    subcategories: [
      "All Jewellery",
      "Jewellery Set",
      "Earrings & Studs",
      "Mangalsutras",
      "Bangles",
      "Necklaces",
      "Rings",
      "Kamarbandh & Maangtika",
      "Anklets",
      "Men Jewellery",
      "Oxidised",
    ],
  },
  {
    name: "Men Accessories",
    subcategories: [
      "View All",
      "Watches",
      "Belts & Wallets",
      "Caps & Hats",
    ],
  },
  {
    name: "Women Accessory",
    subcategories: [
      "Watches",
      "Hair Accessories",
      "Sunglasses",
      "Socks",
      "Scarves and Stoles",
    ],
  },
];
