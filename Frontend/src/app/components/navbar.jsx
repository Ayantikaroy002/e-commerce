import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <>

            <nav className="absolute flex px-12 py-4 h-24 z-10 bg-transparent w-full text-white justify-between items-center uppercase">
                <div className="flex gap-8 items-center">
                    <Link href="/" className="text-xl font-bold">FARADAY.SHOES</Link>
                    <div className="bg-white w-10 opa h-[1px] opacity-65"></div>
                    <div className="flex space-x-6 items-center text-sm leading-4 font-semibold tracking-widest">
                        <Link href="/men">Men</Link>
                        <Link href="/women">Women</Link>
                        <Link href="/kids">Kids</Link>
                        <Link href="/">Shipping & Returns</Link>
                        <Link href="/">Blog</Link>
                    </div>
                </div>
                <div className="flex space-x-6 items-center text-sm leading-4 font-semibold tracking-widest">
                    <Link href="/signin" className="mr-4">Signin</Link>
                    <Link href="/signup" className="mr-4">cart</Link>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
