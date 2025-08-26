import { useEffect, useRef } from "react";

export default function ImageScroll() {
  const images = [
    "https://images.meesho.com/images/marketing/1744636558884.webp",
    "https://images.meesho.com/images/marketing/1744636599446.webp",
    "https://images.meesho.com/images/marketing/1743159302944.webp",
    "https://images.meesho.com/images/marketing/1743159322237.webp",
    "https://images.meesho.com/images/marketing/1743159377598.webp",
    "https://images.meesho.com/images/marketing/1743159363205.webp",
    "https://images.meesho.com/images/marketing/1743159393231.webp",
    "https://images.meesho.com/images/marketing/1743159415385.webp",
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;
    const speed = 3; // pixels per tick
    const interval = setInterval(() => {
      if (container) {
        scrollAmount += speed;
        container.scrollLeft = scrollAmount;

        // Reset seamlessly at half since we duplicated images
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full overflow-x-hidden whitespace-nowrap mt-20 mb-20 scrollbar-hide"
    >
      <div className="flex space-x-6 px-6 ">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="min-w-[300px] p-8 h-[180px] hover:cursor-pointer  rounded-md shadow-lg flex-shrink-0"
          >
            <img
              src={img}
              alt={`img-${i}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
