import React from 'react'

const Herosec = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-cover " style={{ backgroundImage: "url('../first.avif')" }}>
      <div className="absolute inset-0  "></div>
      <nav class=" w-full text-white p-4 flex justify-between items-center z-10">
            <div class="flex items-center">
                <a href="#" class="text-xl font-bold">FARADAY.SHOES</a>
                <div class="ml-10 space-x-8  flex">
                    <a href="#" class="hover:text-gray-300">Shop</a>
                    <a href="#" class="hover:text-gray-300">Guarantee</a>
                    <a href="#" class="hover:text-gray-300">Shipping & Returns</a>
                    <a href="#" class="hover:text-gray-300">Blog</a>
                    <a href="#" class="hover:text-gray-300">About</a>
                </div>
            </div>
            <div class="flex items-center">
                <button class="mr-4 hover:text-gray-300 ">Menu</button>
               
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
    </>
  )
}

export default Herosec
