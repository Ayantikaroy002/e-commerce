import React from 'react'

const Style = () => {
  return (
    <>
     <div className="py-10 mx-20 ">
      <div className="container flex flex-row justify-center space-x-6">
        <div className="relative w-1/2 bg-cover  h-96" style={{ backgroundImage: "url('../Style1.webp')" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">ALL FOR LOVE, LOVE FOR ALL <br /> THE PRIDE COLLECTION &gt;</h2>
          </div>
        </div>
        <div className="relative w-1/2 bg-cover  h-96" style={{ backgroundImage: "url('../style2.webp')" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">THE SUMMER IS ALL YOURS &gt;</h2>
          </div>
        </div>
      </div>
    </div> 

    <div className="py-16  bg-white">
      <div className=" text-center">
        <div className=" mx-[40%] text-xl justify-center items-center border-2 bg-white  flex  py-2 pl-2 pr-5 rounded-full  mb-6">FEEDBACK FROM CLIENTS</div>
        <p className=" italic mb-7 text-center">
          “It’s about self-expression and attitude, not a final destination. <br/> Your choices speak volumes about your evolving self. Embrace this dynamic <br/> process where attitude brings your unique fashion to life.”
        </p>
        <p className=" text-xs font-semibold">Ruby Rose</p>
      </div>
    </div> 
    </>
  )
}

export default Style
