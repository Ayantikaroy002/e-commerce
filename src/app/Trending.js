import React from "react";

const Trending = () => {
  return (
    <>
      <div className="py-10 bg-[#f1d3bc]">
        <div className="container text-center">
          <p className="text-[80px] font-bold">SEASON'S</p>
          <p className="text-[80px] text-white font-bold">TRENDING</p>
          <p className="text-lg mb-12">
            Explore the latest trends in our collection.
          </p>
          <div className="mx-28  grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className=" shadow bg-white flex flex-col ">
              <img
                src="../trend1.avif"
                alt="Trending item 1"
                className="w-full h-[80%] object-cover"
              />
              <div className=" mt-4">
              <div className="flex ">
                <h3 className="text-lg mr-40 ml-4 font-semibold">Product 1</h3>
                <img
                    src="../cart.png"
                    alt="Cart icon"
                    className="w-6 h-6"
                  />
                </div>
                <p className="mr-56">$50.00</p>
                
              </div>
            </div>
            <div className=" bg-white flex flex-col ">
              <img
                src="../trend2.jpg"
                alt="Trending item 2"
                className="w-full h-[80%] object-cover"
              />
              <div className=" mt-4">
              <div className="flex ">
                <h3 className="text-lg mr-40 ml-4 font-semibold">Product 2</h3>
                <img
                    src="../cart.png"
                    alt="Cart icon"
                    className="w-6 h-6"
                  />
                </div>
                <p className="mr-56">$60.00</p>
              </div>
            </div>
            <div className=" bg-white flex flex-col  ">
              <img
                src="../trend 3.jpeg"
                alt="Trending item 3"
                className="w-full h-[80%] object-cover"
              />
               <div className=" mt-4">
              <div className="flex ">
                <h3 className="text-lg mr-40 ml-4 font-semibold">Product 3</h3>
                <img
                    src="../cart.png"
                    alt="Cart icon"
                    className="w-6 h-6"
                  />
                </div>
                <p className="mr-56">$70.00</p>
              </div>
            </div>
            <div className=" bg-white flex flex-col ">
              <img
                src="../trend4.jpg"
                alt="Trending item 4"
                className="w-full h-[80%] object-cover"
              />
               <div className=" mt-4">
              <div className="flex ">
                <h3 className="text-lg mr-40 ml-4 font-semibold">Product 4</h3>
                <img
                    src="../cart.png"
                    alt="Cart icon"
                    className="w-6 h-6"
                  />
                </div>
                <p className="mr-56">$80.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
