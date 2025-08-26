import { useState } from "react";
import { Link } from "react-router-dom";

function BeautyHealth() {
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
        Beauty & Health
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

export default BeautyHealth;


const categories = [
  {
    label: "Beauty & Make up",
    children: [
      {
        label: "Make up",
        children: [
          { label: "Face" },
          { label: "Eyes" },
          { label: "Lips" },
          { label: "Nails" },
          { label: "Make up Kits" },
          { label: "Brushes & Tools" },
          { label: "Makeup Accessories" },
        ],
      },
      {
        label: "Skincare",
        children: [
          { label: "View All" },
          { label: "Face Masks & Peels" },
          { label: "Facecare" },
          { label: "Haircare" },
          { label: "Bath & Shower" },
        ],
      },
      {
        label: "Baby & Mom",
        children: [
          { label: "Baby Personal Care" },
          { label: "Mom Care" },
        ],
      },
      {
        label: "Mens Care",
        children: [
          { label: "Beard Care" },
          { label: "Fragrances for Men" },
        ],
      },
      {
        label: "Healthcare",
        children: [
          { label: "Ear Buds & Cleaners" },
          { label: "Condoms" },
          { label: "Sanitary Pads" },
          { label: "Dental Care" },
          { label: "Weight Management" },
          { label: "Health Monitors" },
        ],
      },
    ],
  },
];
