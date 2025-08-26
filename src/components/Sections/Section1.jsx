const Section1 = () => {
  return (
    <>
      <div className="bg-[url(https://images.meesho.com/images/marketing/1746425994914.webp)] ... relative h-120   bg-cover ">
        <h1 className="text-white  font-bold text-4xl  absolute top-35 right-70 leading-relaxed ">
          Smart Shopping
          <br />
          Trusted by Millions
        </h1>
        <button className="  bg-white p-[20px] pl-15 pr-15 rounded-xl text-2xl absolute bottom-35 right-95 hover:cursor-pointer">
          {" "}
          <h3>Show Now</h3>
        </button>
      </div>
      <span className="bg-pink-100 flex w-full justify-center h-13 items-center pr-2 pl-2 p-8">
        <div className="flex justify-center  items-center gap-[50px]  rounded-xl border-[0.5px] border-pink-300 w-full bg-white p-[10px] h-10 ">
          <div className="flex  justify-center items-center">
            <img className="h-[20px]" src="/images/returns.svg" alt="" />
            <p>7 Days Easy Return </p>
          </div>
          <span className="bg-pink-100 w-[2px] h-6"></span>
          <div className="flex  justify-center items-center">
            <img className="h-[20px]" src="/images/cash.svg" alt="" />
            <p>Cash on Delivery</p>
          </div>
          <span className="bg-pink-100 w-[2px] h-6"></span>

          <div className="flex justify-center items-center">
            <img className="h-[20px]" src="/images/lowest-price.svg" alt="" />
            <p>Lowest Prices</p>
          </div>
        </div>
      </span>
    </>
  );
};
export default Section1;
