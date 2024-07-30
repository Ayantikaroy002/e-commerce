"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Men = () => {
  return (
    <>
      <div className="flex flex-col bg-[#e1dedb] h-[90vh] relative overflow-hidden pt-[100px] pb-[100px] justify-center items-center">

        <div className="left flex flex-col items-left gap-[5rem] w-[100%] relative z-10 mx-auto px-12 py-7 ">

          <div className="text-9xl my-0 tracking-wider leading-none" >

            <h1 className=" my-0 font-bold">
              GET
            </h1>
            <h1 className="my-0 font-bold">
              YOURSELF
            </h1>
            <h1 className="my-0 text-white font-bold">
              INTO THE
            </h1>
            <h1 className="my-0 text-white font-bold">
              RIGHT GEAR
            </h1>
          </div>

          <Link href="/summer-collections" className=" flex items-center gap-3 font-semibold text-left">VIEW SUMMER COLLECTIONS <img className="w-4 h-4" src="../ArrowUpIcon.svg" />
          </Link>

        </div>

        <div className="w-[40%] h-[740px] absolute top-0 bottom-auto left-auto right-0">
          <div className="w-[100vw] h-[100%] justify-end items-center flex absolute top-0 bottom-auto left-auto right-0 ">
            <img className=" w-[40%] h-[740px] object-cover object-right-top max-w-full " src="../men.jpg" alt="mukul er chobi" />
          </div>

          <div className="w-36 h-36 backdrop-blur-xl bg-[#cfb79a] rounded justify-center items-center flex absolute top-auto bottom-[-58px] left-[-82px] right-auto"> </div>
        </div>

      </div>

      <section className="bg-[#e1dedb] h-[90vh] overflow-hidden">
        <div className="h-[100%] mx-6 p-8 ">

          <div className="h-[100%] flex flex-row items-center gap-2">

            <div className=" w-[100%] h-[90%] relative bg-black rounded-md">
              <img
                src="../trend1.avif"
                alt=""
                className="h-full transform opacity-20 transition hover:opacity-90 rounded-md"
              />
              <div className="absolute z-10 top-[20%]">
                <h1 className=" text-white text-right font-bold  text-4xl rotate-[270deg] mt-96 ml-52">

                  Hoodies
                </h1>
              </div>
            </div>

            <div className=" w-[100%] h-[90%] relative bg-black mt-4  rounded-md">
              <img
                src="../trend1.avif"
                alt=""
                className="h-full opacity-60  rounded-md"
              />
              <div className="absolute z-10 top-[20%]">
                <h1 className=" text-white text-right font-bold text-4xl rotate-[270deg] mt-96 ml-52">

                  Sweatshirts
                </h1>
              </div>
            </div>

            <div className=" w-[100%] h-[90%] relative bg-black  rounded-md">
              <img
                src="../trend1.avif"
                alt=""
                className="h-full opacity-60  rounded-md"
              />
              <div className="absolute z-10 top-[20%]">
                <h1 className=" text-white text-right font-bold text-4xl rotate-[270deg] mt-96 ml-52">

                  Shirts
                </h1>
              </div>
            </div>

            <div className=" w-[100%] h-[90%] relative bg-black mt-4 rounded-md">
              <img
                src="../trend1.avif"
                alt=""
                className="h-full opacity-60  rounded-md"
              />
              <div className="absolute z-10 top-[20%]">
                <h1 className=" text-white text-right font-bold text-4xl rotate-[270deg] mt-96 ml-52">

                  TShirts
                </h1>
              </div>
            </div>

            <div className=" w-[100%] h-[90%] relative bg-black  rounded-md">
              <img
                src="../trend1.avif"
                alt=""
                className="h-full opacity-60  rounded-md"
              />
              <div className="absolute z-10 top-[20%]">
                <h1 className=" text-white text-right font-bold text-4xl rotate-[270deg] mt-96 ml-52">

                  Jackets
                </h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="py-10 px-28 bg-[#e1dedb]">
        <div className="container text-center">
          <p className="text-[80px] -ml-96 font-bold">NEWEST</p>
          <p className="text-[80px] ml-36 text-white font-bold">PRODUCTS</p>
          <div className=" text-left flex flex-row mb-10 ">
            <div className="ml-28 mr-auto w-[48%]">
              Different circumstances often dictate our style on so many levels.
              Many women are afraid to try something new at work because they
              think that that they will not be taken seriously. This era of
              ripped jeans and T-shirts, „spilled paint“
            </div>
            <div className="text-xs  mr-36 font-bold  flex items-center  cursor-pointer">
              {" "}
              VIEW ALL
            </div>
          </div>
          <div className="mx-28  grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className=" bg-white flex flex-col ">
              <img
                src=""
                alt="Trending item 1"
                className="w-full h-[80%] object-cover"
              />
              <div className=" mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg ml-4 font-semibold">Product 1</h3>
                  <img src="../cart.png" alt="Cart icon" className="w-6 h-6 mr-3" />
                </div>
                <p className="mr-40">$50.00</p>
              </div>
            </div>
            <div className=" bg-white flex flex-col ">
              <img
                src="../trend2.jpg"
                alt="Trending item 2"
                className="w-full h-[80%] object-cover"
              />
              <div className=" mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg ml-4 font-semibold">Product 2</h3>
                  <img src="../cart.png" alt="Cart icon" className="w-6 h-6 mr-3" />
                </div>
                <p className="mr-40">$60.00</p>
              </div>
            </div>
            <div className=" bg-white flex flex-col  ">
              <img
                src="../trend 3.jpeg"
                alt="Trending item 3"
                className="w-full h-[80%] object-cover"
              />
              <div className=" mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg ml-4 font-semibold">Product 3</h3>
                  <img src="../cart.png" alt="Cart icon" className="w-6 h-6 mr-3" />
                </div>
                <p className="mr-40">$70.00</p>
              </div>
            </div>
            <div className=" bg-white flex flex-col ">
              <img
                src="../trend4.jpg"
                alt="Trending item 4"
                className="w-full h-[80%] object-cover"
              />
              <div className=" mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg ml-4 font-semibold">Product 4</h3>
                  <img src="../cart.png" alt="Cart icon" className="w-6 h-6 mr-3" />
                </div>
                <p className="mr-40">$80.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-[#e1dedb]">
        <h1 className="ml-32 text-6xl "> Features of our Products </h1>

        <div className="flex flex-row mx-32 bg-black my-14 h-[400px]">
          <div className="left flex flex-col mt-10 ">
            <h1 className="text-3xl px-6 font-bold text-white">
              GET YOURSELF INTO THE RIGHT GEAR
            </h1>
            <p className="w-3/4 pl-7 pt-56 text-white">
              Many women are afraid to try something new at work because they
              think that that they will not be taken seriously.
            </p>
          </div>
          <div className="right  w-[49%]">
            <img className="h-[400px] " src="../men.jpg" alt="" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Men;
