import { useState } from "react";
import { Link } from "react-router-dom";

function Electronics() {
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
       Electronics
      </Link>

      {open && (
        <div className="flex absolute w-400 left-19 top-28 bg-white flex-row gap-15 p-4">
          {categories.map((category, i) => (
            <div key={i}>
              <h1 className="text-[#9F2089] leading-10 font-bold mb-2">{category.title}</h1>
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

export default Electronics;


const categories = [
  {
    title: "Audio",
    items: [
      "Bluetooth Headphone & Earphones",
      "Wired Headphones & Earphones",
      "Speakers"
    ]
  },
  {
    title: "Mobile & Accessories",
    items: [
      "Smartwatches",
      "Mobile Holders",
      "Mobile cases and covers",
      "Mobile Chargers",
      "Mobile & Accessories - View All"
    ]
  },
  {
    title: "Smart Wearables",
    items: [
      "VR Box",
      "Tripod",
      "Microphone",
      "Photo & Video Accessories"
    ]
  }
];
