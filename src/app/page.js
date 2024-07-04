import Image from "next/image";
import Herosec from "./Herosec";
import Highlight from "./Highlight";
import Trending from "./Trending";
import Style from "./Style";
import Feedback from "./Feedback";
import Journal from "./Journal";

export default function Home() {
  return (
    <>
    <div className="text-center text-xs text-white bg-[#3b9393] py-2"> FREE SHIPPING WORLDWIDE </div>  
      <Herosec/>
      <Highlight/>
      <Trending/>
      <Style/>
      <Feedback/>
      <Journal/>
    </>
  );
}
