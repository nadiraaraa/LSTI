"use client";
import { useState } from "react"
import { Header, NavBar, Title, Paket} from "../components"


const Pesan = () => {
  const [dipesan, setDipesan] = useState(false)

  return (
    <>
      <Header/>
        <div className="">
          <div className="fixed w-full z-[-10]">
            <img src="/images/kuota_bg.png" className="w-full"></img>
          </div>
          {dipesan ?
            <div className="pt-48">

              <div className="bg-[#DE521E] mx-24 py-4 rounded-lg ">
                <p className="text-xl text-white text-center">Kuota berhasil ditambahkan!</p>
              </div>
              </div>
        
          : <>
          <div className="pt-12">
            <Title text="Tambah Kuota"/>
          </div>
          <div className="pt-6 pb-12">
            <Paket kuota={20} harga={40000} />
            <Paket kuota={20} harga={40000} />
            <Paket kuota={20} harga={40000} />
            <Paket kuota={20} harga={40000} />
          </div>
        </>}
          </div>
          
      <NavBar/>
    </>
  )
}

export default Pesan