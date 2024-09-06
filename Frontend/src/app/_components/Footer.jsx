import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-[120vh] relative ">

        <div className=" ">
          <div className=" flex flex-row px-36 py-16">
            <img className="  h-44 w-28 opacity-50" src="../women.jpg" alt="" />
            <img className=" ml-[70%] my-10 h-28 w-28 opacity-50" src="../women.jpg" alt="" />
          </div>

          <div className=" flex flex-row px-24 py-10">
            <img className="  h-32 w-28 opacity-50" src="../women.jpg" alt="" />
            <img className=" mx-[53%] -mt-10  h-48 w-32 opacity-50" src="../women.jpg" alt="" />
          </div>
        </div>

        <div className=" flex flex-col text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center max-w-[45rem] ">
          <h1 className="flex text-5xl special-text tracking-wide text-center leading-tight">
            Put Your Hands First At Our <br /> Premium And LImited Products
          </h1>

          <span className=" pt-28 text-lg pb-4 ">
            Subscribe to our newsletter
          </span>

          <input
            type="text"
            className="text-center mb-2 w-[100%] px-20 py-4 text-xl font-medium text-white bg-gray-800 "
            placeholder="Email"
          />
          <button className=" px-36 w-[100%] text-center py-4 text-xl font-medium text-black bg-white ">
            Subscribe
          </button>
        </div>
      </div>

      <div className="grid grid-flow-col h-[80vh] bg-gray-950 z-10 items-center relative overflow-hidden" style={{ gridTemplateColumns: '0.5fr 1fr' }}>

        <div className="z-10  w-[100%] h-full relative top-0 bottom-0 left-0 right-[auto]">
          <div className="absolute top-0 bottom-0 left-0 right-0 ">
            <img className=" h-[100%] w-[100%] object-cover opacity-30" src="../footimg.jpg" alt="" />
          </div>

          <div className=" absolute flex flex-col mt-12 ml-24 mr-10 text-white justify-center h-full text-left  ">
            <img className="w-8 mb-3 float-right" src="../pin.png" />
            <h1 className=" text-5xl font-normal text-white"> Find out about the sales at our local shop</h1>
            <button className="border-white mr-56 border-2 p-2 text-xl font-bold my-10"> Find Shops</button>
          </div>

        </div>


        <div className="px-16 flex justify-around  text-lg text-left text-white" >

          <div className="flex flex-col">
            <h1 className="pb-4"> Categories</h1>
            <div className="flex flex-col gap-1">

              <Link href="/hoodies">
                <p className="text-gray-500"> Hoodies </p>
              </Link>
              <Link href="/sweatshirts">
                <p className="text-gray-500"> Sweatshirts </p>
              </Link>
              <Link href="/shirts">
                <p className="text-gray-500"> Shirts </p>
              </Link>
              <Link href="/t-shirts">
                <p className="text-gray-500"> T-shirts </p>
              </Link>
              <Link href="/jackets">
                <p className="text-gray-500"> Jackets </p>
              </Link>

            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="pb-4"> Company</h1>
            <div className="flex flex-col gap-1">

              <Link href="/about">
                <p className="text-gray-500"> About </p>
              </Link>
              <Link href="/blog">
                <p className="text-gray-500"> Blog </p>
              </Link>
              <Link href="/contact">
                <p className="text-gray-500"> Contact </p>
              </Link>
              <Link href="/guarantee">
                <p className="text-gray-500"> Guarantee </p>
              </Link>
              <Link href="/shipping">
                <p className="text-gray-500"> Shipping </p>
              </Link>

            </div>
          </div>

          <div className="flex flex-col">
            <h1 className=" pb-4"> Support</h1>
            <div className="flex flex-col gap-1">

              <Link href="/style-guide">
                <p className="text-gray-500"> Style Guide </p>
              </Link>
              <Link href="/licensing">
                <p className="text-gray-500"> Licensing </p>
              </Link>
              <Link href="/change-log">
                <p className="text-gray-500"> Change log </p>
              </Link>
              <Link href="/instructions">
                <p className="text-gray-500"> Instructions </p>
              </Link>

            </div>
          </div>

          <div className="flex flex-col justify-center gap-1">

            <Link href="/style-guide">
              <img className="w-6 mb-3" src="../facebook.png" />
            </Link>
            <Link href="/licensing">
              <img className="w-6 mb-3" src="../twitter.png" />
            </Link>
            <Link href="/change-log">
              <img className="w-6 mb-3" src="../youtube.png" />
            </Link>
            <Link href="/instructions">
              <img className="w-6" src="../instagram.png" />
            </Link>

          </div>

        </div>
      </div>

    </>
  );
};

export default Footer;
