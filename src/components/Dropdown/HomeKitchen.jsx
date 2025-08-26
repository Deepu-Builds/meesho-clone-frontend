import { useState } from "react";
import { Link } from "react-router-dom";

function HomeKitchen() {
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
        Home & Kitchen
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

export default HomeKitchen;


const categories = [
  {
    label: "Kitchen & Appliances",
    items: [
      "View All",
      "Kitchen Tools",
      "Storage & Organizers",
      "Appliances",
      "Cookware",
      "Dinnerware",
      "Bakeware",
      "Glasses & Barware",
    ],
  },
  {
    label: "Home Furnishing",
    items: [
      "Bedsheets",
      "Curtains & Sheers",
      "Pillows, Cushions & Covers",
      "Cushions & Cushion Covers",
      "Carpets & Doormats",
      "Mattress Protectors",
      "Sofa & Diwan Sets",
      "Towels & Bathrobes",
      "Blankets, Quilts & Dohars",
    ],
  },
  {
    label: "Home Decor",
    items: [
      "All Home Decor",
      "Appliances Covers",
      "Clocks",
      "Storage & Organizers",
      "Showpieces",
      "Paintings & Photoframes",
      "Stickers & Wallpapers",
      "Lights",
      "Gifts & Mugs",
    ],
  },
  {
    label: "Kitchen & Dining",
    items: [
      "Kitchen Storage",
      "Cookware & Bakeware",
    ],
  },
  {
    label: "Home Improvement",
    items: [
      "All Home Essentials",
      "Cleaning Supplies",
      "Gardening",
      "Bathroom Accessories",
      "Insect Protection",
      "Home Tools",
    ],
  },
];
