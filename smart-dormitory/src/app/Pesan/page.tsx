"use client;"
import { Header, NavBar, Back, Title, MenuCard} from "../components"
import {useState} from 'react';

const Pesan = () => {
  return (
    <>
      <Header/>
      <Back/>
      <div className=" z-0">
        <img src="/images/menu_bg.png" className="w-screen"></img>
      </div>
        <div className="overflow-y-auto bg-[#6E7B43] z-20">
            <div className='mt-2 min-h-fit'>
            <Title text = "Profil"/>
            </div>
            <div>
                <div className="px-4 py-6 grid grid-cols-2 text-black">
                    <p className='text-left'>Pesanan kamar #5207</p>
                    <p className='text-right'>Pesan &gt;1&nbsp;
                    <input type="checkbox" id="multiple" name="multiple" value="multiple" className="p-2"/>
                    </p>
                </div>
            </div>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <div className="h-96"></div>
        </div>
      <NavBar/>
    </>
  )
}

export default Pesan