import React from 'react'
import Image from 'next/image'

const Style = () => {
  return (
    <>
      {/* <div className="py-10 mx-20 ">
      <div className="container flex flex-row justify-center space-x-6"> */}

      <div className="py-10 flex justify-center ">
        <div className="container flex flex-row justify-around gap-14 p-12">

          <div className="relative w-1/2 overflow-hidden rounded-md bg-black h-96 flex items-center justify-center">

            <Image
              src="/Style1.webp" // Replace with the path to your image file
              alt="First Image"
              layout="fill"
              objectFit="cover"
              max-width="100%"
              style={{ opacity: 0.6 }}
            />

            <h2 className="text-white absolute text-center text-3xl font-bold">ALL FOR LOVE, LOVE FOR ALL <br /> THE PRIDE COLLECTION &gt;</h2>

          </div>

          <div className="relative w-1/2 overflow-hidden rounded-md bg-black h-96 flex items-center justify-center">

            <Image
              src="/Style2.webp" // Replace with the path to your image file
              alt="First Image"
              layout="fill"
              objectFit="cover"
              max-width="100%"
              style={{ opacity: 0.6 }}
            />

            <h2 className="text-white absolute text-center text-3xl font-bold">THE SUMMER IS ALL YOURS &gt;</h2>

          </div>

        </div>
      </div >

      
      <div className="py-16  bg-white">
        <div className=" text-center">
          <div className=" mx-[40%] text-xl justify-center items-center border-2 bg-white  flex  py-2 pl-2 pr-5 rounded-full  mb-6">FEEDBACK FROM CLIENTS</div>
          <p className=" italic mb-7 text-center">
            “It’s about self-expression and attitude, not a final destination. <br /> Your choices speak volumes about your evolving self. Embrace this dynamic <br /> process where attitude brings your unique fashion to life.”
          </p>
          <p className=" text-xs font-semibold">Ruby Rose</p>
        </div>
      </div>
    </>
  )
}

export default Style
