import React from "react";
import Link from 'next/link';
import Image from 'next/image';


const Trending = () => {
  return (
    <>


      <div className="cloth py-10 flex justify-center bg-[#f1d3bc] ">
        <div className="container flex flex-col justify-around p-12">

          <div className="text-center leading-none ">
            <p className="text-[100px] pl-16 text-left special-text tracking-wider font-bold">NEWEST
            </p>
            <p className="text-[100px] pr-16 text-right special-text text-white tracking-wider font-bold">PRODUCTS</p>
            <div className="flex text-left justify-between my-6" >
              <p className="text-xl  max-w-[40rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta feugiat etiam aliquet aliquet tellus vel. Et maecenas id bibendum sit. Augue nulla tortor faucibus nunc. Urna massa mattis faucibus velit sed volutpat sodales. Quis at mi amet, ipsum.
              </p>
              <Link href="/signin" className="mr-4 special-text font-semibold tracking-wider text-[1rem]">VIEW ALL</Link>
              {/* arrow svg needed  */}
            </div>

          </div>

          {/* product grid here */}
          <div className="  grid h-[30rem] grid-cols-2 md:grid-cols-4 gap-6">

            {/* product 1 */}
            <div className="bg-white flex flex-col overflow-hidden rounded-md justify-between">
              <div className=" relative align-middle w-[100%] h-[80%]">
                <Image
                  src="/trend1.avif" // Replace with the path to your image file
                  alt="First Image"
                  layout="fill" 
                  objectFit="cover"
                  max-width="100%"
                />
              </div>

              <div className="flex justify-between items-center m-4">
                <div >
                  <h3 className="text-lg  font-semibold">Product 1</h3>
                  <p>$50.00</p>
                </div>
                <Link href="/signin">
                  <img
                    src="../cart.png"
                    alt="Cart icon"
                    width={"35px"}
                  /></Link>
              </div>
            </div>
            {/* product 2 */}
            <div className="bg-white flex flex-col overflow-hidden rounded-md justify-between">
              <div className=" relative align-middle w-[100%] h-[80%]">
                <Image
                  src="/trend2.jpg" // Replace with the path to your image file
                  alt="First Image"
                  layout="fill"
                  objectFit="cover"
                  max-width="100%"
                />
              </div>

              <div className="flex justify-between items-center m-4">
                <div >
                  <h3 className="text-lg  font-semibold">Product 2</h3>
                  <p>$50.00</p>
                </div>
                <Link href="/signin">
                  <img
                    src="../cart.png"
                    alt="Cart icon"
                    width={"35px"}
                  />
                </Link>

              </div>
            </div>
            {/* product 3 */}
            <div className="bg-white flex flex-col overflow-hidden rounded-md justify-between">
              <div className=" relative align-middle w-[100%] h-[80%]">
                <Image
                  src="/trend3.jpg" // Replace with the path to your image file
                  alt="First Image"
                  layout="fill"
                  objectFit="cover"
                  max-width="100%"
                />
              </div>

              <div className="flex justify-between items-center m-4">
                <div >
                  <h3 className="text-lg  font-semibold">Product 3</h3>
                  <p>$50.00</p>
                </div>
                <Link href="/signin">
                  <img
                    src="../cart.png"
                    alt="Cart icon"
                    width={"35px"}
                  />
                </Link>
              </div>
            </div>
            {/* product 4 */}
            <div className="bg-white flex flex-col overflow-hidden rounded-md justify-between">
              <div className=" relative align-middle w-[100%] h-[80%]">
                <Image
                  src="/trend4.jpg" // Replace with the path to your image file
                  alt="First Image"
                  layout="fill"
                  objectFit="cover"
                  max-width="100%"
                />
              </div>

              <div className="flex justify-between items-center m-4">
                <div >
                  <h3 className="text-lg  font-semibold">Product 4</h3>
                  <p>$50.00</p>
                </div>
                <Link href="/signin">
                  <img
                    src="../cart.png"
                    alt="Cart icon"
                    width={"35px"}
                  />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Trending;
