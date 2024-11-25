"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SessionContext } from "../_context/SessionContext";
import Cart from "./Cart";
const Navbar = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  
  const { jwt, user, signOut } = useContext(SessionContext);

  useEffect(() => {
    if (jwt && user) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }

  }, [jwt, user]);

  

  return (
    <>
      <nav className="fixed flex px-12 mt-1 py-4 h-24 z-20 bg-transparent w-full text-white justify-between items-center uppercase">
        <div className="flex gap-8 items-center">
          <Link href="/" className="text-xl font-bold">FARADAY.SHOES</Link>
          <div className="bg-white w-10 opa h-[1px] opacity-65"></div>
          <div className="flex space-x-6 items-center leading-4 font-semibold tracking-widest">
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
            <Link href="/">Shipping & Returns</Link>
            <Link href="/">Blog</Link>
          </div>
        </div>
        <div className="flex space-x-6 items-center leading-4 font-semibold tracking-widest">
          <Cart/>
          {!isSignIn ? <Link href="/signin" className="mr-4">Signin</Link> :
            <DropdownMenu>
              <DropdownMenuTrigger> <FontAwesomeIcon icon={faUserCircle} className="h-6 w-6" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>My Order</DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;
