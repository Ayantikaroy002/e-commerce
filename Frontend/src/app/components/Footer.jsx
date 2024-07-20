import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-[650px] relative ">
        <div className=" ">
          <div className=" flex flex-row px-36 py-16">
            <img className="  h-44 w-28 opacity-50" src="../women.jpg" alt="" />
            <img
              className=" ml-[70%] my-10 h-28 w-28 opacity-50"
              src="../women.jpg"
              alt=""
            />
          </div>

          <div className=" flex flex-row px-24 py-10">
            <img className="  h-32 w-28 opacity-50" src="../women.jpg" alt="" />
            <img
              className=" mx-[53%] -mt-10  h-48 w-32 opacity-50"
              src="../women.jpg"
              alt=""
            />
          </div>
        </div>

        <div className=" flex flex-col text-white absolute inset-0 justify-center items-center ">
          <h1 className="flex text-2xl">
            Put Your Hands First At Our <br/> Premium And LImited Products
          </h1>
          <span className=" pt-28 text-xs pb-3 ">
             Subscribe to our newsletter
          </span>
          <input
            type="text"
            className="text-center mx-20 mb-3 px-20 py-3 text-sm font-medium text-white bg-gray-800 "
            placeholder="Enter your email"
          />
          <button className=" px-36 text-center py-3 text-sm font-medium text-black bg-white ">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex flex-row bg-gray-950 h-[500px] space-x-28">
        <div className="flex relative">
            <div className="">
          <img className=" h-[100%] opacity-50" src="../men.jpg" alt="" />
          </div>
          <div className=" flex flex-col mt-48 ml-36 text-white absolute inset-0 text-left  ">
                 <img className="h-4 w-4 mb-3 float-rifgt" src="../pin.png"/> 
                 <h1 className=" text-3xl text-white"> Find out about the sales at our local shop</h1>
                 <button className="border-white mr-56 border-2 font-bold my-10"> Find Shops</button>
             </div>
        </div>
        <div className="grid grid-cols-4 ">
          <div className="flex flex-col my-36 mr-20 text-left text-white ">
            <h1 className="pb-4"> Categories</h1>
            <p className="text-gray-500"> Hoodies </p>
            <p className="text-gray-500"> Sweatshirts </p>
            <p className="text-gray-500"> Shirts </p>
            <p className="text-gray-500"> t-shirts </p>
            <p className="text-gray-500"> Jackets </p>

            </div>
            <div className="flex flex-col my-36 mr-20 text-left text-white">
            <h1 className="pb-4"> Company</h1>
            <p className="text-gray-500"> About </p>
            <p className="text-gray-500"> Blog </p>
            <p className="text-gray-500"> Contact </p>
            <p className="text-gray-500"> Guarantee </p>
            <p className="text-gray-500"> Shipping </p>

            </div>
            <div className="flex flex-col my-36 mr-20 text-left text-white">
            <h1 className=" pb-4"> Support</h1>
            <p className="text-gray-500"> Style Guide </p>
            <p className="text-gray-500"> Licensing </p>
            <p className="text-gray-500"> Change log </p>
            <p className="text-gray-500"> Instructions </p>
         </div>
         <div className="flex flex-col mb-36 mt-44 mr-20 text-left text-white">
            
            <img className="h-4 w-4 mb-3" src="../facebook.png"/> 
            <img className="h-4 w-4 mb-3" src="../twitter.png"/> 
            <img className="h-4 w-4 mb-3" src="../youtube.png"/> 
            <img className="h-4 w-4" src="../instagram.png"/> 

            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
