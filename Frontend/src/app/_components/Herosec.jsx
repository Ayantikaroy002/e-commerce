"use-client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './navbar';

const Herosec = () => {

  // ref={mainRef}
  return (
    <>

    

      <div className="relative flex h-[100vh] overflow-hidden pt-56 pb-40 flex-col justify-end items-stretch bg-black ">
        <div className="relative z-10 flex justify-between items-end mx-[3vw] px-14 text-white">
          <div className="max-w-3xl mr-14 flex flex-col items-start justify-end ">
            <div className="flex gap-2 items-center mb-4">
              <div className="bg-white w-10 h-0.5"></div>
              <h2 className="text-sm">WEBFLOW TEMPLATE</h2>
            </div>
            <h1 className="text-7xl mb-4 leading-[5rem] tracking-[.2em] font-bold ">DESIGNED FOR <br /> THE FREEDOM <br /> TO WALK</h1>
            <p className="text-lg leading-[2.2rem] mb-6">
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
            </p>
          </div>
          <button className="mb-6 px-8 py-4 tracking-[2px] bg-white text-black font-semibold rounded">SHOP NOW</button>
        </div>
        <div className="absolute inset-0  w-[100%] h-[100%] opacity-65 objectFit-cover align-middle">
          <Image
            src="/homebg.jpeg" // Replace with the path to your image file
            alt="First Image"
            layout="fill"
            objectFit="cover"
            max-width="100%"
          />
        </div>

      </div>

      <div className="cloth py-10 flex justify-center bg-gray-100 ">
        <div className="container flex justify-around p-12">

          <Link href="/men" className="relative w-96 h-[500px] overflow-hidden rounded-md bg-black flex items-center justify-center">
            <Image
              src="/men.jpg" // Replace with the path to your image file
              alt="First Image"
              layout="fill"
              objectFit="cover"
              max-width="100%"
              style={{ opacity: 0.6 }}
            />

            <h2 className="text-white absolute text-center text-3xl font-bold">Shop Men's Wear &gt;</h2>
          </Link>

          <Link href="/women" className="relative w-96 h-[500px] overflow-hidden rounded-md bg-black flex items-center justify-center">
            <Image
              src="/women.jpg" // Replace with the path to your image file
              alt="First Image"
              layout="fill"
              objectFit="cover"
              max-width="100%"
              style={{ opacity: 0.6 }}
            />

            <h2 className="text-white absolute text-center text-3xl font-bold">Shop Women's Wear &gt;</h2>
          </Link>

          <Link href="/kids" className="relative w-96 h-[500px] overflow-hidden rounded-md bg-black flex items-center justify-center">
            <Image
              src="/kid.jpeg" // Replace with the path to your image file
              alt="First Image"
              layout="fill"
              objectFit="cover"
              max-width="100%"
              style={{ opacity: 0.6 }}
            />

            <h2 className="text-white absolute text-center text-3xl font-bold">Shop Kid's Wear &gt;</h2>
          </Link>

        </div>
      </div>


    </>
  );
};

export default Herosec;
