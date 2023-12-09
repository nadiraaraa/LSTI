"use client";
import { useState } from "react"
import { Header, Sidebar, Title, Paket, Back} from "../../components"


const Pesan = () => {
  const [dipesan, setDipesan] = useState(false)


  return (
    <>
          <Back/>
        <div className="bg-cover bg-[url('/images/kuota_bg.png')] h-screen w-full">
            <div className="pt-60">
              <div className="bg-[#DE521E] mx-24 md:mx-72 py-4 rounded-lg ">
                <p className="text-xl text-white text-center">Kuota berhasil ditambahkan!</p>
              </div>
            </div>
          </div>
    </>

    )
}

export default Pesan;