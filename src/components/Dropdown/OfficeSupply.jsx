import { useState } from "react";
import { Link } from "react-router-dom";

function OfficeSupply() {
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
       Office Supplies & Stationery
      </Link>

      {open && (
        <div className="flex absolute w-400 left-19 top-28 bg-white flex-row gap-15 p-4">
          {dropdownData.map((category, i) => (
            <div key={i}>
              <h1 className="text-[#9F2089] leading-10 font-bold mb-2">{category.category}</h1>
              <div className="flex flex-col gap-1">
                {category.subcategories.map((item, j) => (
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

export default OfficeSupply;


const dropdownData = [
  {
    category: "Office Supplies & Stationery",
    subcategories: [
      "Diaries & Notebooks",
      "Adhesives & Tapes",
      "Files & Desks Organizers",
      "Pens & Pencils",
      "Paintings & Photoframes"
    ]
  }
];
