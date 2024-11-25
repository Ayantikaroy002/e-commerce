"use client";
import React, { useContext, useEffect, useState } from "react";
import { ShoppingBag, TrashIcon } from "lucide-react";
import GlobalApi from "../_utils/GlobalApi";
import { CartContext } from "../_context/CartContext";
import { SessionContext } from "../_context/SessionContext";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image";
  

const Cart = () => {

    const [cartCount, setCartCount] = useState(0);
    const [items, setItems] = useState([]);
  const {updateCart, setUpdateCart} = useContext(CartContext);
  const { jwt, user} = useContext(SessionContext);

  useEffect(() => {
    if (jwt && user) {
      getCartItems();
    }
  }, [jwt, user, updateCart]);


    const getCartItems = async () => {
        try {
          const cartItems = await GlobalApi.getCartItems(user.id, jwt);
          console.log(cartItems);
          setCartCount(cartItems?.length)
          setItems(cartItems)
        } catch (error) {
          console.error("Error fetching cart items: ", error);
        }
      };


      return (
        <div>
          <Sheet>
            <SheetTrigger>
              <h2 className="flex">
                <ShoppingBag />
                <span className="mt-1 ml-1">{cartCount}</span>
              </h2>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-4xl">My Cart</SheetTitle>
                <SheetDescription>
                  <div>
                    <div>
                      {items.map((item, index) => {
                        const mensProducts = item.attributes.mens_products.data;
                        const womensProducts = item.attributes.womens_products.data;
                        const kidsProducts = item.attributes.kids_products.data;
    
                        // Assuming one type of product in the cart (either mens, womens, or kids)
                        let product = null;
                        if (mensProducts.length > 0) {
                          product = mensProducts[0].attributes;
                        } else if (womensProducts.length > 0) {
                          product = womensProducts[0].attributes;
                        } else if (kidsProducts.length > 0) {
                          product = kidsProducts[0].attributes;
                        }
    
                        return (
                          product && (
                            <div
                              key={index}
                              className="flex justify-between items-center bg-[#e5dede] py-[10px] pr-7 pl-3 my-2"
                            >
                              <div className="flex gap-6 items-center">
                                <img
                                  src={
                                    product.Product_image.data[0].attributes.url
                                  }
                                  width={90}
                                  height={90}
                                  alt={product.Product_name}
                                  className="border"
                                />
                                <div>
                                  <h2 className="font-bold text-lg">
                                    {product.Product_name}
                                  </h2>
                                  <h2 className="">Quantity: {item.attributes.Quantity}</h2>
                                  <h2 className="text-lg font-bold text-[#c99753]">
                                    ${product.Product_price}
                                  </h2>
                                </div>
                              </div>
                              <TrashIcon className="h-6 w-5" />
                            </div>
                          )
                        );
                      })}
                    </div>
    
                    <div className="absolute w-[90%] bottom-6 flex flex-col">
                      <h2 className="text-lg font-bold flex justify-between">
                        Subtotal <span className="text-3xl">$90</span>
                      </h2>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      );
    };
    
    export default Cart;
    