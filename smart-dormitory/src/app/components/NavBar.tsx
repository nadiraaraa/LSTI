"use client";
import React from 'react';
import {useState} from 'react';

const NavBar = () => {
    const [nav, setNav] = useState("None")

  return (
    <>
        <div className="bg-[#FFFCDB] h-40 bottom-0 fixed w-screen border-2 border-[#DE521E]">
            <div className="flex text-center w-fit text-[#DE521E]">
                <a href="/Kuota" className='p-6'>
                    <img src="/images/pesanan.png" className="h-20"></img>
                    <p>Kuota</p>
                </a>
                <a href="/Pesan" className='p-6'>
                    <img src="/images/menu.png" className="h-20"></img>
                    <p>Pesan</p>
                </a>
                <a href="/Profil" className='p-6'>
                    <img src="/images/profil.png" className="h-20"></img>
                    <p>Profil</p>
                </a>
            </div>
        </div>
        <div className="h-36"></div>
    </>
    
  )
}

export default NavBar