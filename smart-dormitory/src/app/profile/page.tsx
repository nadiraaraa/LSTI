"use client";
import React from 'react';
import {Header, Sidebar, Back, Title, Button} from '../components';
import { redirect } from 'next/navigation';
import Cookies from 'universal-cookie';

const ProfilU = () => {
  const Cookie = new Cookies();
  const role = Cookie.get("payload").role;
  const id = Cookie.get("payload").id;
  const name = Cookie.get("payload").name;
  const email = Cookie.get("payload").email;

  const handleSignOut = () => {
    const cookies = new Cookies();
    cookies.remove("token", { path: "/" });
    cookies.remove("payload", { path: "/" });
    window.location.href = "/auth";
  };

  return (
    <>
      <div className='bg-[#6E7B43]'>
        <Back/>
          <div className='pt-12'>
            <Title text = "Profil"/>
          </div>
          
          <div className="bg-[#FFFCDB] content-center my-4 mx-4 md:mx-36 rounded-lg py-8">
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Nama</p>
                <p className='text-right'>{name}</p>
            </div>
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Id Kamar</p>
                <p className='text-right'>#{id}</p>
            </div>
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Email</p>
                <p className='text-right break-words'>{email}</p>
            </div>
            <div className='text-center pt-24 p-4 pb-0'>
              <form action="/auth">
              <button  onClick={handleSignOut}
                className="border-2 border-black  text-xl font-bold px-10 py-2 bg-[#DE521E] rounded-md text-center hover:bg-white">
                LOG OUT
                </button>
              </form>
              </div>
          </div>
          <div className="h-screen"></div>
          </div>
  </>
  )
}

export default ProfilU