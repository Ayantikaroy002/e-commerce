import React from "react";
import Link from "next/link";

const Items = ({ productList, categoryName }) => {
  console.log("API Response:", productList);

  if (!productList || productList.length === 0) {
    return (
      <div className="bg-[#e1dedb] py-28 text-center">
        <h1 className="text-7xl font-bold font-sans">No Products Found</h1>
        <p className="text-xl mt-8 mb-16 mx-28">
          We couldn't find any products in this category. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#e1dedb] py-28">
        <h1 className="text-7xl font-bold font-sans text-center">
          {categoryName}
        </h1>
        <p className="text-center text-xl mt-8 mb-16 mx-28">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus gravida
          odio sagittis, risus sodales nec. Sagittis nisi at venenatis, pretium.
          Risus neque a, egestas iaculis.
        </p>
        <div className="mx-28 grid grid-cols-2 md:grid-cols-4 gap-6">
          {productList.map((product) => (
            <Link href={`/${product.attributes.Type}-id/${product.id}`} key={product.id} className="bg-white flex flex-col">
              <img
                src={product.attributes.Product_image.data?.[0].attributes.url}
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4">
                <div className="flex">
                  <h3 className="text-lg ml-4 font-semibold">
                    {product.attributes.Product_name}
                  </h3>
                  <img
                    src="../cart.png"
                    alt="Cart icon"
                    className="w-6 h-6"
                  />
                </div>
                <p className="ml-4 text-xl">
                  ${product.attributes.Product_price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="py-10 flex flex-row bg-[#bf8c4e] my-20">
          <h1 className="text-left text-4xl font-semibold font-sans text-white py-48 pl-28">
            Put your hands first at our premium and limited products
          </h1>
          <div className="justify-center items-center w-3/4 py-36 pl-36 mr-28">
            <h1 className="text-white text-lg my-3 text-center">
              Subscribe to our newsletter
            </h1>
            <input
              type="email"
              placeholder="E-mail"
              className="bg-[#a97d47] text-white text-2xl py-3 rounded-md w-full text-center mb-6"
            />
            <button className="bg-white text-xl font-semibold py-3 rounded-md w-full flex justify-center items-center">
              <img src="../vercel.svg" className="h-5 w-5 mr-2" />
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
