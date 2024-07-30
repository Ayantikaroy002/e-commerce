"use client";
import React from 'react';
import Trending from "./components/Trending";
import Style from "./components/Style";

import Journal from "./components/Journal";

import Herosec from "./components/Herosec";


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
