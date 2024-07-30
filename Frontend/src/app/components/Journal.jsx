import React from "react";
import Image from "next/image";

const Journal = () => {
  return (
    <>
      {/* <section className="bg-[#f1d3bc] py-10 h-[1100px]">
        <div className="ml-32"> */}

      <div className="py-10 flex justify-center bg-[#f1d3bc]">
        <div className="container justify-around p-12">

          <h2 className="text-5xl text-center font-bold mb-6">Style Journal</h2>
          <p className="text-lg text-center mb-12">
            It's a Sanctuary where trends meets personal flair,
          </p>


          <div className="grid grid-cols-4 gap-[1.5rem] ">

            <div className="relative bg-[#f1d3bc]">

              <div className="relative h-[25rem] ">
                <Image
                  src="/trend1.avif" // Replace with the path to your image file
                  alt="First Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>


              <div className="pt-8">
                <span className="bg-[#032d12] text-white text-lg px-5 py-2 rounded-full">
                  January 04
                </span>
                <h2 className="text-xl pt-6 font-semibold ">
                  Style Serendity Discovering Your Unique Fashion Story
                </h2>
                <p className="text-sm pt-3 pb-6 ">
                  Your choices speak volumes about your evolving self. Embrace this dynamic
                </p>
                <a href="#" className="text-[#032d12]">
                  View More
                </a>
              </div>
            </div>


            <div className="relative bg-[#f1d3bc] pt-14">

              <div className="relative h-[25rem] ">
                <Image
                  src="/trend1.avif" // Replace with the path to your image file
                  alt="First Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="pt-8">
                <span className="bg-[#032d12] text-white text-lg px-5 py-2 rounded-full">
                  January 04
                </span>
                <h2 className="text-xl pt-6 font-semibold ">
                  Style Serendity Discovering Your Unique Fashion Story
                </h2>
                <p className="text-sm pt-3 pb-6 ">
                  Your choices speak volumes about your evolving self. Embrace this dynamic
                </p>
                <a href="#" className="text-[#032d12]">
                  View More
                </a>
              </div>
            </div>

            <div className="relative bg-[#f1d3bc] pt-[106px]">

              <div className="relative h-[25rem] ">
                <Image
                  src="/trend1.avif" // Replace with the path to your image file
                  alt="First Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="pt-8">
                <span className="bg-[#032d12] text-white text-lg px-5 py-2 rounded-full">
                  January 04
                </span>
                <h2 className="text-xl pt-6 font-semibold ">
                  Style Serendity Discovering Your Unique Fashion Story
                </h2>
                <p className="text-sm pt-3 pb-6 ">
                  Your choices speak volumes about your evolving self. Embrace this dynamic
                </p>
                <a href="#" className="text-[#032d12]">
                  View More
                </a>
              </div>
            </div>

            <div className="relative bg-[#f1d3bc] ">
              <button className=" border-black border-2 px-8 py-4 z-10 absolute right-0 "> ALL BLOG </button>
              
              <div className="pt-[155px]">

                <div className="relative h-[25rem] ">
                  <Image
                    src="/trend1.avif" // Replace with the path to your image file
                    alt="First Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="pt-8">
                  <span className="bg-[#032d12] text-white text-lg px-5 py-2 rounded-full">
                    January 04
                  </span>
                  <h2 className="text-xl pt-6 font-semibold ">
                    Style Serendity Discovering Your Unique Fashion Story
                  </h2>
                  <p className="text-sm pt-3 pb-6 ">
                    Your choices speak volumes about your evolving self. Embrace this dynamic
                  </p>
                  <a href="#" className="text-[#032d12]">
                    View More
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* </section> */}
    </>
  );
};

export default Journal;
