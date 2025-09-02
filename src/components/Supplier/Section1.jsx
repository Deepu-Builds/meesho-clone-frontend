import { Link } from "react-router-dom";

function Section1() {
  return (
    <>
      <div className="home relative w-full h-120 bg-[#FDF7F9] mt-24">
        <img
          className="h-130  absolute bottom-0 right-0"
          src="https://supplier.meesho.com/images/Desktop-Background-1.png"
          alt="home-image"
        />

        <img
          className="h-110  absolute bottom-0 right-75"
          src="https://supplier.meesho.com/images/Desktop-Pic-new.png"
          alt="home-image"
        />



        <div className="main pl-55 pt-20 flex flex-col gap-3">
          <div className="text-4xl  font-bold  ">
            <p>
              Sell online to Crores of Customers at
              <p className="text-[#F43297]">0% Commission</p>
            </p>
          </div>

          <div className=" leading-10">
            <p>Become a Meesho seller and grow your business across India</p>

            <p className="flex gap-1">
              <img
                src="https://supplier.meesho.com/images/new-tag.svg"
                alt="new"
              />
              Don’t have a GSTIN? You can still sell on MeeStore.{" "}
              <Link className="text-[#F43297] font-bold">Know more</Link>
            </p>
          </div>

          <Link
            to="/signup"
            className="hover:text-[#3C29B7]  w-34 border mt-10 hover:border-[#3C29B7] px-5 py-2 rounded-sm font-medium 
                      bg-[#3C29B7] hover:bg-white border-[#3C29B7] text-white transition duration-200"
          >
            Start Selling
          </Link>
        </div>
      </div>
    </>
  );
}

export default Section1;
