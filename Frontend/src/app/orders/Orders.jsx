import React from "react";

const Orders = () => {
  return (
    <>
      <div className=" bg-[#e1dedb] py-20">
        <h1 className="text-5xl font-bold font-sans text-center">
          {" "}
          YOUR ORDERS{" "}
        </h1>
        <div class="max-w-6xl mx-auto space-y-6 py-8">
          <div class="bg-white rounded-xl mb-4">
            <div class="flex justify-between items-center py-2 px-4 bg-[#cfb79a]">
              <div>
                <p class="text-gray-600">ORDER PLACED</p>
                <p class="text-xs">30 June 2023</p>
              </div>

              <div>
                <p class="text-gray-600 text-sm underline">
                  View order details
                </p>
              </div>
            </div>
            <div class="flex items-center mb-4 px-8 py-4 space-x-4">
              <img
                class="w-20 h-24 object-cover"
                src="../men.jpeg"
                alt="Product Image"
              />
              <div>
                <p class="font-semibold">
                  NAVYSPORT Men's Ankle Length Cotton Socks (Pack Of 4)
                  (NSO-4_Multicolour)
                </p>
                <p class="text-gray-600 text-xs">
                  Return window closed on 11-Jul-2023
                </p>
                <p class="text-gray-600 ">TOTAL: ₹294.00</p>
                <div class="mt-2 flex space-x-2">
                  <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                    Track your order
                  </button>
                  <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                    Write a product review
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl mb-4">
            <div class="flex justify-between items-center py-2 px-4 bg-[#cfb79a]">
              <div>
                <p class="text-gray-600">ORDER PLACED</p>
                <p class="text-xs">30 June 2023</p>
              </div>

              <div>
                <p class="text-gray-600 text-sm underline">
                  View order deatails
                </p>
              </div>
            </div>
            <div class="flex items-center mb-4 px-8 py-4 space-x-4">
              <img
                class="w-20 h-24 object-cover"
                src="../men.jpeg"
                alt="Product Image"
              />
              <div>
                <p class="font-semibold">
                  NAVYSPORT Men's Ankle Length Cotton Socks (Pack Of 4)
                  (NSO-4_Multicolour)
                </p>
                <p class="text-gray-600 text-xs">
                  Return window closed on 11-Jul-2023
                </p>
                <p class="text-gray-600 ">TOTAL: ₹294.00</p>
                <div class="mt-2 flex space-x-2">
                  <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                    Track your order
                  </button>
                  <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                    Write a product review
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Orders;