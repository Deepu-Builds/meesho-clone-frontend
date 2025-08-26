import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const items = [
  {
    link: "/personalcare",
    img: "https://images.meesho.com/images/marketing/1744635542873.webp",
  },
  {
    link: "/electronics",
    img: "https://images.meesho.com/images/marketing/1744635521751.webp",
  },
  {
    link: "/Makeup",
    img: "https://images.meesho.com/images/marketing/1744635497001.webp",
  },
  {
    link: "/smartphone",
    img: "https://images.meesho.com/images/marketing/1744635464683.webp",
  },
  {
    link: "/menperfume",
    img: "https://images.meesho.com/images/marketing/1744635432891.webp",
  },
  {
    link: "/Bag",
    img: "https://images.meesho.com/images/marketing/1744635402151.webp",
  },
  {
    link: "/Footwear",
    img: "https://images.meesho.com/images/marketing/1744635614888.webp",
  },
  {
    link: "/books",
    img: "https://images.meesho.com/images/marketing/1744635646070.webp",
  },
];

const Section4 = () => {
  return (
    <div className="relative p-[30px] m-[30px]">
      <div className="flex  items-center text-4xl gap-1">
        <h1>Orignal Brands</h1>
        <CheckCircle className="" src="src/assets/Section4Tick.png" alt="" />
      </div>

      <div className="absolute right-0 top-8 text-pink-800 hover:underline hover:text-pink-900  text-2xl">
        <Link to={"/"} className="flex items-center">
          View All
          <ArrowRight />
        </Link>
      </div>

      <div className="flex   gap-6  overflow-x-auto  scrollbar-hide">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="flex flex-col items-center min-w-[222px]  "
          >
            <img src={item.img} alt={item.name} className="m-[40px] shadow-sm rounded-3xl" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Section4;
