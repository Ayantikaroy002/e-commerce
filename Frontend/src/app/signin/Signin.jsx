"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import Link from "next/link";
import GlobalApi from '../_utils/GlobalApi';
import { useRouter } from 'next/navigation';

const Signin = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt');
    if(jwt){
      router.push('/');
    }
  }, [])

  const handleClick=() => {
    GlobalApi.signIn(email, password).then(resp=>{
      console.log(resp.data.user);
      console.log(resp.data.jwt);

      sessionStorage.setItem('user', JSON.stringify(resp.data.user));
      sessionStorage.setItem('jwt', resp.data.jwt);
      router.push('/');
  })
  }

  return (
    <>
      <div className="flex bg-[#e1dedb] w-screen h-screen">
        <div className="flex flex-row mx-20 border-x-2 border-white bg-[#f0efed] overflow-hidden  my-5 ">
         
          <div className="flex flex-col w-1/2 p-10">
            <div className="text-center">
              <span className="text-lg pb-4 block">LARGEST IMAGE SOURCE</span>
              <h1 className="text-5xl font-bold pb-4">POWERED BY CREATORS AROUND THE WORLD</h1>
             
              <span className="text-slate-500 block pt-9 pb-3">Don't have an account?</span>
              <Link href="/signup" className="hover:underline cursor-pointer">Create account &rarr;</Link>
            </div>
            <div className="bg-black h-80 w-full rounded-xl mt-8 relative">
              <img className="h-full w-full rounded-xl opacity-35" src="../fashion1.webp"/>
              <div className="absolute inset-0 flex text-white item-center justify-center">
                <h2 className="text-2xl pt-20">About us</h2>
              </div>
            </div>
          </div>
         
          <div className="flex flex-col w-1/2 relative bg-black rounded-lg">
            <img className="h-full w-full opacity-50 rounded-lg" src="../fashion.avif" alt="Fashion" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl w-96 h-[450px]">
                <h2 className="text-xl text-center font-bold mb-4">Login to your account</h2>
                <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input type="text" onChange={(e)=>setemail(e.target.value)} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter Email" />
                </div>
                <div>
                  <label className="block text-gray-700">Password</label>
                  <input type="password" onChange={(e)=>setpassword(e.target.value)} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter Password" />
                </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="h-4 w-4" />
                      <span className="ml-2 text-sm text-gray-700">Remember me</span>
                    </label>
                    <p className="text-sm text-gray-500">Forgot your password?</p>
                  </div>
                  <button onClick={()=>handleClick()} disabled={!(email||password)} className="w-full py-2 bg-black text-white rounded-full">Sign in</button>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
