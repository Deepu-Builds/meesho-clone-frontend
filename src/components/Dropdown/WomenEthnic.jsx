import { useState } from "react";
import { Link } from "react-router-dom";

function WomenEthnic() {
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
        Women Ethnic
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

const categories = [
  {
    label: "Sarees",
    items: [
      "All Sarees",
      "Silk Sarees",
      "Banarasi Silk Sarees",
      "Cotton Sarees",
      "Georgette Sarees",
      "Chiffon Sarees",
      "Heavy Work Sarees",
      "Net Sarees",
    ],
  },
  {
    label: "Kurtis",
    items: [
      "All Kurtis",
      "Anarkali Kurtis",
      "Rayon Kurtis",
      "Cotton Kurtis",
      "Chikankari Kurtis",
    ],
  },
  {
    label: "Kurta Sets",
    items: [
      "All Kurta Sets",
      "Kurta Palazzo Sets",
      "Rayon Kurta Sets",
      "Kurta Pant Sets",
      "Cotton Kurta Sets",
      "Sharara Sets",
      "Dupatta Sets",
      "Cotton Sets",
      "Rayon Sets",
      "Printed Sets",
    ],
  },
  {
    label: "Suits & Dress Material",
    items: [
      "All Suits & Dress Material",
      "Cotton Suits",
      "Embroidered Suits",
      "Crepe Suits",
      "Silk Suits",
      "Patiala Suits",
    ],
  },
  {
    label: "Lehengas",
    items: ["Lehenga Cholis", "Net Lehenga", "Bridal Lehenga"],
  },
  {
    label: "Other Ethnic",
    items: [
      "Blouses",
      "Dupattas",
      "Lehanga",
      "Gown",
      "Skirts & Bottomwear",
      "Islamic Fashion",
      "Petticoats",
    ],
  },
];

export default WomenEthnic;
