import React from "react";

const Journal = () => {
  return (
    <>
      <section className="bg-[#f1d3bc] py-10 h-[1100px]">
        <div className="ml-32">
          <h2 className="text-5xl mr-20 text-center font-bold mb-10">Style Journal</h2>
          <p className="text-xl mr-20 text-center mb-12">
            It's a Sanctuary where trends meets personal flair,
          </p>
          
          <div className="flex flex-row gap-4 ">
            <div className="bg-[#f1d3bc] w-[300px] h-[700px] ">
              <img
                src="../trend1.avif"
                alt=""
                className="object-cover"
              />
              <div className="pt-8">
                <span className="bg-[#032d12] text-white text-lg px-5 py-2 rounded-full">
                  January 04
                </span>
                <h1 className="text-xl pt-6 font-semibold ">
                  Style Serendity Discovering Your Unique Fashion Story
                </h1>
                <h1 className="text-xs pt-3 pb-6 ">
                Your choices speak volumes about your evolving self. Embrace this dynamic
                </h1>

                <a
                  href="#"
                  className="text-[#032d12]"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="bg-[#f1d3bc] w-[300px] h-[700px] pt-14">
              <img
                src="../trend1.avif"
                alt=""
                className="object-cover"
              />
              <div className="pt-8">
                <span className="bg-[#032d12] text-white text-lg px-5 py-2 rounded-full">
                January 04
                </span>
                <h3 className="text-xl pt-6 font-semibold">
                Style Serendity Discovering Your Unique Fashion Story
                </h3>
                <h1 className="text-xs pt-3 pb-6 ">
                Your choices speak volumes about your evolving self. Embrace this dynamic
                </h1>
                <a
                  href="#"
                  className="text-[#032d12]"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="bg-[#f1d3bc] w-[300px] h-[700px] pt-[106px]">
              <img
                src="../trend1.avif"
                alt=""
                className="object-cover"
              />
              <div className="pt-8">
                <span className=" bg-[#032d12] text-white text-lg px-5 py-2 rounded-full">
                January 04
                </span>
                <h3 className="text-xl pt-6 font-semibold">
                Style Serendity Discovering Your Unique Fashion Story
                </h3>
                 <h1 className="text-xs pt-3 pb-6 ">
                Your choices speak volumes about your evolving self. Embrace this dynamic
                </h1>
                <a
                  href="#"
                  className="text-[#032d12]"
                >
                  View More
                </a>
              </div>
            </div>
               
            <div className="bg-[#f1d3bc] w-[300px] h-[700px] ">
            <button className=" border-black border-2 px-8 py-4 float-right mb-[106px]"> ALL BLOG </button> 
              <img
                src="../trend1.avif"
                alt=""
                className="object-cover"
              />
              <div className="pt-8">
                <span className=" bg-[#032d12] text-white text-lg px-5 py-2 rounded-full">
                January 04
                </span>
                <h3 className="text-xl pt-6 font-semibold">
                Style Serendity Discovering Your Unique Fashion Story
                </h3>
                <h1 className="text-xs pt-3 pb-6 ">
                Your choices speak volumes about your evolving self. Embrace this dynamic
                </h1>
                <a
                  href="#"
                  className="text-[#032d12]"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Journal;
