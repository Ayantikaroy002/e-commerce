import React from "react";

const Product = () => {
  return (
    <>
      <div className="flex flex-row bg-[#ffffff] px-28 py-20">
        <img
          className="flex flex-col h-1/2 w-[1300px] rounded-lg"
          src="../T-shirts.webp"
        />
        <div className="flex flex-col text-left ml-20">
          <h1 className="text-xl mb-2">T-shirts</h1>
          <h2 className="text-3xl text-[#bf8c4e]"> 56.00 </h2>
          <p className="mt-5 mb-10 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam,
            scelerisque sagittis, interdum diam in nunc ut elementum. Sed sit a
            facilisis purus.
          </p>
          <h2 className=" text-[#bf8c4e] mb-3"> SIZE </h2>
          <span className="flex-flex-col mr-28 mb-7 space-x-2">
            <button className="bg-[#ececec] selection:bg-[#bf8c4e] text-lg py-2 px-4 rounded ">
              {" "}
              Small{" "}
            </button>
            <button className="bg-[#ececec] selection:bg-[#bf8c4e] text-lg py-2 px-4 rounded">
              {" "}
              Standard{" "}
            </button>
            <button className="bg-[#ececec] selection:bg-[#bf8c4e] text-lg py-2 px-4 rounded">
              {" "}
              Large{" "}
            </button>
            <button className="bg-[#ececec] selection:bg-[#bf8c4e] text-lg py-2 px-4 rounded">
              {" "}
              Extra Large{" "}
            </button>
          </span>
          <h2 className=" text-[#bf8c4e] mb-3"> COLOR </h2>
          <span className="flex-flex-col space-x-2">
            <button className="bg-[#ececec] selection:bg-[#bf8c4e] text-lg py-2 px-4 rounded">
              {" "}
              White{" "}
            </button>
            <button className="bg-[#ececec] selection:bg-[#bf8c4e] text-lg py-2 px-4 rounded">
              {" "}
              Black{" "}
            </button>
          </span>
          <h2 className="text-[#bf8c4e] mt-5 mb-3"> QUANTITY </h2>
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mr-96"
            defaultValue={1}
            required
          />

          <button className="bg-black hover:bg-[#bf8c4e] text-white py-2 px-4 rounded inline-flex items-center my-16 mr-96 space-x-1 text-center font-semibold">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
      <div className="bg-[#ffffff] px-28 py-20 border-b-2">
        <h1 className="text-4xl mb-7"> About the Product </h1>
        <div className="flex flex-row bg-[#ffffff] ">
          <div className="flex flex-col">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            maecenas volutpat semper suspendisse elit ut. Urna aliquet eget nunc
            condimentum platea vitae vel lacinia condimentum. Sed proin sed
            augue fermentum, pharetra turpis. Felis feugiat viverra nulla semper
            ac tempus condimentum. Neque faucibus tempor, arcu id vulputate
            consectetur. Eget pellentesque cras euismod et.
          </div>
          <div className="flex flex-col">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            maecenas volutpat semper suspendisse elit ut. Urna aliquet eget nunc
            condimentum platea vitae vel lacinia condimentum. Sed proin sed
            augue fermentum, pharetra turpis. Felis feugiat viverra nulla semper
            ac tempus condimentum. Neque faucibus tempor, arcu id vulputate
            consectetur. Eget pellentesque cras euismod et.
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] px-28 py-20">
        <span className="flex justify-between items-center mb-7 w-full">
          <h1 className="text-4xl "> Reviews </h1>
          <h1 className="text-4xl mr-36"> 4.8 </h1>
        </span>

        <div className="overflow-x-auto flex space-x-4 px-4">
          <div className="bg-[#f5f5f5] p-4 rounded-md h-auto w-[700px]">
            <div className="flex justify-between items-center ">
              <span className="text-gray-800 font-semibold">Name</span>
              <span className="text-gray-800">4.8★</span>
            </div>
            <p className="text-gray-600 my-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="bg-[#f5f5f5] p-5 rounded-md h-auto w-[700px]">
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-semibold">Name</span>
              <span className="text-gray-800">3.8★</span>
            </div>
            <p className="text-gray-600 my-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className="bg-[#f5f5f5] p-4 rounded-md h-auto w-[700px]">
            <div className="flex justify-between items-center">
              <span className="text-gray-800 font-semibold">Name</span>
              <span className="text-gray-800">4.5★</span>
            </div>
            <p className="text-gray-600 my-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#e3e0dd] px-28 py-20 h-auto">
        <h1 className="text-5xl text-center my-20"> People also bought this </h1>
        <div className="mx-4  grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className=" bg-white flex flex-col  ">
              <img
                src="../men.jpeg"
                alt="Trending item 1"
                className="w-full h-[80%] object-cover"
              />
              <div className=" mt-4">
                <div className="flex ">
                  <h3 className="text-lg ml-4 font-semibold">Product 1</h3>
                  <img src="../cart.png" alt="Cart icon" className="w-6 h-6" />
                </div>
                <p className="ml-4 text-xl">$50.00</p>
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
                  <h3 className="text-lg ml-4 font-semibold">Product 2</h3>
                  <img src="../cart.png" alt="Cart icon" className="w-6 h-6" />
                </div>
                <p className="ml-4 text-xl">$60.00</p>
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
                  <h3 className="text-lg ml-4 font-semibold">Product 3</h3>
                  <img src="../cart.png" alt="Cart icon" className="w-6 h-6" />
                </div>
                <p className="ml-4 text-xl">$70.00</p>
              </div>
            </div>
            
          </div>
      </div>
       
    </>
  );
};

export default Product;
