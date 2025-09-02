import { useState } from "react";
import { Link } from "react-router-dom";

function Men() {
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
        Men
      </Link>

      {open && (
        <div className="flex absolute w-400 left-19 top-28 bg-white flex-row gap-15 p-4">
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

export default Men;

const categories = [
  {
    label: "Top Wear",
    items: [
      "All Top Wear",
      "Tshirts",
      "Shirts",
      "Winter Wear",
      "Jackets",
      "Sweater and Sweatshirts",
    ],
  },
  {
    label: "Bottom Wear",
    items: [
      "Track Pants",
      "All Bottomwear",
      "Jeans",
      "Trousers",
      "Shorts",
    ],
  },
  {
    label: "Men Accessories",
    items: [
      "All Men Accessories",
      "Watches",
      "Belts & Wallets",
      "Jewellery",
      "Bags",
    ],
  },
  {
    label: "Men Footwear",
    items: [
      "All Men Footwear",
      "Casual Shoes",
      "Sports Shoes",
      "Flip Flops & Sandals",
      "Formal Shoes",
      "Loafers",
    ],
  },
  {
    label: "Ethnic Wear",
    items: [
      "Kurtas Sets",
      "Ethnic Jackets",
      "Bottomwear",
    ],
  },
  {
    label: "Inner & Sleep Wear",
    items: [
      "All Inner & Sleep Wear",
      "Boxers",
      "Underwears",
    ],
  },
];
