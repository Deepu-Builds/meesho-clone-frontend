
import { Link } from "react-router-dom";

const items = [
  { name: "Ethenic Wear", link: "/EthenicWear", img: "https://images.meesho.com/images/marketing/1744634654837.webp" },
  { name: "Western Dresses", link: "/Westerndresses", img: "https://images.meesho.com/images/marketing/1744634725496.webp" },
  { name: "Menswear", link: "/Menswear", img: "https://images.meesho.com/images/marketing/1744634780426.webp" },
  { name: "Footwear", link: "/Footwear", img: "https://images.meesho.com/images/marketing/1744634814643.webp" },
  { name: "Home Decor", link: "/Homedecor", img: "https://images.meesho.com/images/marketing/1744634835018.webp" },
  { name: "Beauty", link: "/Beauty", img: "https://images.meesho.com/images/marketing/1744634871107.webp" },
  { name: "Accessories", link: "/Accessories", img: "https://images.meesho.com/images/marketing/1744634909968.webp" },
  { name: "Grocery", link: "/Grocery", img: "https://images.meesho.com/images/marketing/1744634937295.webp" },
];

const Section2 = () => {
  return (
    <div className="flex  justify-center overflow-x-auto gap-6 p-6 m-12 scrollbar-hide">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className="flex flex-col items-center min-w-[150px] scale-110 hover:scale-115 transition"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-32 h-32 object-cover rounded-lg "
          />
          <p className="mt-2 text-sm font-medium">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Section2;
