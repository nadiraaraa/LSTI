"use client";
import React from 'react';
import {Header, NavBar, Back, Title, Button} from '../components';
import { redirect } from 'next/navigation';

const Profil = () => {

  return (
    <>
      <Header/>
        <div className="overflow-y-auto bg-[#6E7B43] min-h-full">
          <Back/>
          <div className='pt-12'>
            <Title text = "Profil"/>
          </div>
          
          <div className="bg-[#FFFCDB] content-center m-4 rounded-lg py-8">
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Nama</p>
                <p className='text-right'>Nadira</p>
            </div>
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Kamar</p>
                <p className='text-right'>#5207</p>
            </div>
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Email</p>
                <p className='text-right break-words'>nadira.penghuni@gmail.com</p>
            </div>
            <div className='text-center pt-24 p-4 pb-0'>
              <form action="/Masuk">
              <button  onClick={() => redirect('/Masuk')}
                className="border-2 border-black  text-xl font-bold px-10 py-2 bg-[#DE521E] rounded-md text-center hover:bg-white">
                LOG OUT
                </button>
              </form>
              </div>
          </div>
          <div className="h-40"></div>
        </div>
      <NavBar/>
    </>
  )
}

export default Profil