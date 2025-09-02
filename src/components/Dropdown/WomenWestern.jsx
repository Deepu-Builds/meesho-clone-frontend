import { useState } from "react";
import { Link } from "react-router-dom";

function WomenWestern() {
  const [open, setOpen] = useState(false);

const categories = [
  {
    label: "Topwear",
    items: [
      "All Topwear",
      "Tops",
      "Dresses",
      "T-shirts",
      "Jumpsuits",
    ],
  },
  {
    label: "Bottomwear",
    items: [
      "All Bottomwear",
      "Jeans & Jeggings",
      "Palazzos",
      "Shorts",
      "Skirts",
    ],
  },
  {
    label: "Innerwear",
    items: [
      "Bra",
      "Women Innerwear",
      "Briefs",
    ],
  },
  {
    label: "Sleepwear",
    items: [
      "Nightsuits",
      "Women Nightdress",
    ],
  },
  {
    label: "Maternity Wear",
    items: [
      "All Maternity & Feedingwear",
      "Maternity Kurtis & Dresses",
    ],
  },
  {
    label: "Sports Wear",
    items: [
      "All Women Sportwear",
      "Sports Bra",
    ],
  },
];


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
        <div className="flex absolute w-400 left-19 top-28 bg-white flex-row gap-15 p-4 shadow-2xs"> 

          {categories.map((category, i) => (
            <div key={i}>
              <h1 className="text-[#9F2089] leading-10 font-bold mb-2">{category.label}</h1>
              <div className="flex flex-col gap-1">
                {category.items.map((item, j) => (
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


export default WomenWestern;
