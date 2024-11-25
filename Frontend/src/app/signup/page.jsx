"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import { useRouter } from 'next/navigation';


const SignUp = () => {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const router = useRouter();

  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt');
    //toast.success("This is a toast notification !");
    if(jwt){
      router.push('/');
    }
  }, [])

  const handleClick = (e) => {
    GlobalApi.registerUser(username, email, password).then(resp=>{
      console.log(resp.data.user);
      console.log(resp.data.jwt);
    
   // e.preventDefault();
    console.log({ username, email, password });
    sessionStorage.setItem('user', JSON.stringify(resp.data.user));
    sessionStorage.setItem('jwt', resp.data.jwt);
    router.push('/signin');
  })
  };

  return (
    <>
    <div className="flex bg-[#e1dedb] w-screen h-screen">
      
      <div className="flex flex-row mx-20 border-x-2 border-white bg-[#f0efed] overflow-hidden  my-5 ">
       
        <div className="flex flex-col w-1/2 p-10">
          <div className="text-center">
            <span className="text-lg pb-4 block">LARGEST IMAGE SOURCE</span>
            <h1 className="text-5xl font-bold pb-4">POWERED BY CREATORS AROUND THE WORLD</h1>
            <span className="text-lg pb-4 block">LARGEST IMAGE SOURCE</span>          
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
            <div className="bg-white p-6 rounded-xl w-96 h-[500px]">
              <h2 className="text-xl text-center font-bold mb-4">Create New Account</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">Username</label>
                  <input type="text" onChange={(e)=>setusername(e.target.value)} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter Username" />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input type="text" onChange={(e)=>setemail(e.target.value)} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter Email" />
                </div>
                <div>
                  <label className="block text-gray-700">Password</label>
                  <input type="password" onChange={(e)=>setpassword(e.target.value)} className="mt-1 p-2 w-full border rounded-md" placeholder="Enter Password" />
                </div>
                <div>
                  <label className="block text-gray-700"> Confirm Password</label>
                  <input type="password" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter Password" />
                </div>
               
                <button disabled={!(username||email||password)} onClick={()=>handleClick()} className="w-full py-2 bg-black text-white rounded-full">Create Account</button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp;
