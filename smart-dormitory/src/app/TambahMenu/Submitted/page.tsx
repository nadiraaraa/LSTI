import React from 'react'
import { useState } from "react"
import { Header, NavBar, Title, Paket, Back} from "../../components"

const TambahS = () => {
  return (
    <>
      <Header role="caterer"/>
      <Back/>
        <div className="bg-[#6E7B43] h-screen">

            <div className="pt-44 text-center">

              <div className="bg-[#DE521E] mx-24 mb-6 py-4 rounded-lg ">
                <p className="text-xl text-white text-center">Menu berhasil ditambahkan!</p>
              </div>
              <a href="/TambahMenu" className='text-white text-md m-12 border-2 border-white py-2 px-4 rounded-lg w-28'>Tambah Menu Lain</a>
            </div>
        </div>

        <NavBar role="caterer" view="menu"/>
    </>
    )
}


export default TambahS