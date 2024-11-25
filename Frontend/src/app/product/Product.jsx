"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import GlobalApi from "../_utils/GlobalApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderCircle } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import { SessionContext } from "../_context/SessionContext";

const Product = ({ product }) => {
  const [productTotalPrice, setProductTotalPrice] = useState(product.attributes.Product_price);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const {updateCart, setUpdateCart} = useContext(CartContext);
  const { jwt, user } = useContext(SessionContext);
  const router = useRouter();
  const key = `${product.attributes.Type}s_products`;
  //const image = `${product.attributes.Product_image}`

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    setQuantity(value);
  };

  const addToCart = () => {
    setLoading(true)
    if (!jwt) {
      router.push('/signin');
      setLoading(false)
      return;
    }
  
    const data = {
      data: {
        Quantity: quantity,
        Amount: (productTotalPrice * quantity).toFixed(2),
        [key]: product.id,
        users_permissions_user: user.id,
        userId: user.id
      }
    };
  
    console.log(data);

    GlobalApi.addToCart(data, jwt).then(resp => {
      console.log("resp: ", resp);
      toast.success("Added to cart successfully");
      setUpdateCart(!updateCart);
      setLoading(false)
    }).catch(e => {
      console.log("Error while adding to cart:", e)
      toast.error("Error while adding to cart");
      setLoading(false)
    })
  };
  

  return (
    <>
      <div className="flex flex-row bg-[#f1d3bc] px-28 py-20">
      <ToastContainer/>
        <img
          className="flex flex-col h-1/2 w-[1300px] rounded-lg"
          src={product.attributes.Product_image.data?.[0].attributes.url}
          alt="Product"
        />
        <div className="flex flex-col text-left ml-20">
          <h1 className="text-xl mb-2">{product.attributes.Category}</h1>
          <h2 className="text-3xl text-[#bf8c4e]">₹ {product.attributes.Product_price}</h2>
          <p className="mt-5 mb-10 text-gray-500">
            {product.attributes.Product_description?.[0].children?.[0].text}
          </p>
          <h2 className=" text-[#bf8c4e] mb-3"> SIZE </h2>
          <span className="flex-flex-col mr-28 mb-7 space-x-2">
            {product.attributes.Size.split(', ').map((size) => (
              <button className="bg-[#ececec] selection:bg-[#bf8c4e] text-lg py-2 px-4 rounded" key={size}>
                {size}
              </button>
            ))}
          </span>
          <h2 className=" text-[#bf8c4e] mb-3"> COLOR </h2>
          <span className="flex-flex-col space-x-2">
            {product.attributes.Color.split(', ').map((Color) => (
              <button className="bg-[#ececec] selection:bg-[#bf8c4e] text-lg py-2 px-4 rounded" key={Color}>
                {Color}
              </button>
            ))}
          </span>
          <h2 className="text-[#bf8c4e] mt-5 mb-3"> QUANTITY </h2>
          <input
            type="number"
            id="number-input"
            value={quantity}
            onChange={handleQuantityChange}
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mr-96"
            min="1"
            required
          />
          <div>
            <h2>Total Price: ₹ {quantity * productTotalPrice}</h2>
          </div>
          <button className="bg-black hover:bg-[#bf8c4e] text-white py-2 px-4 rounded inline-flex items-center my-16 mr-96 space-x-1 text-center font-semibold"
          onClick={()=>addToCart()} disabled={loading}>
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            
            <span>{loading?<LoaderCircle className='animate-spin'/>: 'ADD TO CART'}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
