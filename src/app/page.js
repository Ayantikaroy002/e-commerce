
import Herosec from "./Herosec";

import Trending from "./Trending";
import Style from "./Style";

import Journal from "./Journal";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    <div className="text-center text-xs text-white bg-[#3b9393] py-2"> FREE SHIPPING WORLDWIDE </div>  
      <Herosec/>
      
      <Trending/>
      <Style/>
      
      <Journal/>
      <Footer/>
    </>
  );
}
