import { Link } from "react-router-dom";

const product = [
  {
    id: 1,
    name: "Lehangas",
    img: "https://images.meesho.com/images/marketing/1744722796811.webp",
  },
  {
    id: 2,
    name: "Menwear",
    img: "https://images.meesho.com/images/marketing/1744635113661.webp",
  },
  {
    id: 3,
    name: "Sarees",
    img: "https://images.meesho.com/images/marketing/1744635139351.webp",
  },
  {
    id: 4,
    name: "Jewellery",
    img: "https://images.meesho.com/images/marketing/1744635189897.webp",
  },
];

export default function Marketing() {
  return (
    <div
      className="relative w-full h-180 bg-cover bg-center flex"
      style={{ backgroundImage: "url('https://images.meesho.com/images/marketing/1744698265981.webp')" }}
    >
      {/* SHOP NOW Button */}
      <Link
        to="#"
        className="absolute bottom-10 left-10 md:bottom-20 md:left-48 h-[80px] w-[250px] bg-[#3f1f11] border border-[#ffd182] text-[#ffd182] text-2xl md:text-[28px] font-medium flex items-center justify-center rounded-lg hover:scale-105 transition-transform duration-200"
      >
        SHOP NOW
      </Link>

      {/* Product Images */}
      <div className="absolute right-50 top-30 grid grid-cols-2 gap-14 ">
        {product.map((item) => (
          <Link key={item.id} to="#" className="hover:-translate-y-1 transition-transform duration-200">
            <img
              src={item.img}
              alt={item.name}
              className="h-[200px] sm:h-[200px] md:h-[200px] object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
