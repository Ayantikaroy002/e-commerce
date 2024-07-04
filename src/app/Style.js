import React from 'react'

const Style = () => {
  return (
    <>
     <div className="py-10 mx-20 ">
      <div className="container mx-auto flex flex-row justify-center space-x-6">
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
    </>
  )
}

export default Style
