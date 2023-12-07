import React from 'react'
import { useState } from "react"
import { Header, Sidebar, Title, Paket, Back} from "../../components"

const TambahS = () => {
  return (
    <>
    <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
      <div className="fixed flex z-40 md:relative md:flex-none md:w-[17rem]">
        <Sidebar role="caterer"/>
      </div>
      <div className="md:flex-grow  w-full bg-[#6E7B43]">
      <Header role="user"/>
        <div className="bg-[#6E7B43] h-screen">

            <div className="pt-60 text-center">

              <div className="bg-[#DE521E] mb-6 py-4 mx-auto  w-fit px-8 rounded-lg ">
                <p className="text-xl text-white text-center">Menu berhasil ditambahkan!</p>
              </div>
              <a href="/TambahMenu" className='text-white text-md m-12 border-2 border-white py-2 px-4 rounded-lg w-28'>Tambah Menu Lain</a>
            </div>
        </div>
        </div>
        </div>
    </>
    )
}


export default TambahS