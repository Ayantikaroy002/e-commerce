"use client";
import React from 'react';
import Trending from "./_components/Trending";
import Style from "./_components/Style";

import Journal from "./_components/Journal";

import Herosec from "./_components/Herosec";


export default function Home() {
 
  return (
    <>
    <div className="text-center tracking-widest text-sm text-white bg-[#3b9393] py-[.5rem]"> FREE SHIPPING WORLDWIDE </div>  
      
      <Herosec/>
      
      <Trending/>
      <Style/>
      
      <Journal/>
      
    </>
  );
}
