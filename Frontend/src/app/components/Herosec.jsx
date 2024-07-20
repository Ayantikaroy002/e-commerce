"use client";
import React from 'react';
import Link from 'next/link';

const Herosec = () => {
  

  return (
    <>
      <div ref={mainRef} className="relative h-screen bg-cover" style={{ backgroundImage: "url('../first.avif')" }}>
        <div className="absolute inset-0"></div>
        <nav className="w-full text-white flex justify-between items-center">
          <div className="flex items-center ml-6">
            <Link href="/" className="text-xl font-bold">FARADAY.SHOES</Link>
            <div className="ml-10 space-x-8 flex">
              <Link href="/men">Men</Link>
              <Link href="/women">Women</Link>
              <Link href="/kids">Kids</Link>
              <Link href="/">Shipping & Returns</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/login">
              <button className="mr-4">Login</button>
            </Link>
            <button className="mr-4">Cart</button>
          </div>
        </nav>
        <div className="relative z-10 flex flex-col items-start justify-center h-full pl-10 pr-[600px] text-white">
          <h2 className="text-sm mb-4">WEBFLOW TEMPLATE</h2>
          <h1 className="text-6xl font-bold mb-4">DESIGNED FOR THE FREEDOM TO WALK</h1>
          <p className="text-lg mb-8">
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
          </p>
          <button className="px-6 py-2 bg-white text-black font-semibold">SHOP NOW</button>
        </div>
      </div>

      <div className="cloth py-7 bg-gray-100">
        <div className="container flex justify-center space-x-10">
          <div className="w-96 bg-cover h-[500px]" style={{ backgroundImage: "url('../women.jpg')" }}>
            <div className="flex items-center justify-center h-full">
              <h2 className="text-white text-3xl font-bold">Shop Women</h2>
            </div>
          </div>
          <div className="w-96 bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('../men.jpg')" }}>
            <div className="flex items-center justify-center h-full">
              <h2 className="text-white text-3xl font-bold">Shop Men</h2>
            </div>
          </div>
          <div className="w-96 bg-cover bg-center h-[500px]" style={{ backgroundImage: "url('../kid.jpeg')" }}>
            <div className="flex items-center justify-center h-full">
              <h2 className="text-white text-3xl font-bold">Shop Kids</h2>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Herosec;
