import React from 'react'

const Highlight = () => {
  return (
    <>
      <div className="py-7 bg-gray-100">
      <div className="container mx-auto flex justify-center space-x-10">
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
  )
}

export default Highlight
