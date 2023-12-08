"use client";
import { useState } from "react"
import { Header, Sidebar, Title, Paket, Back} from "../components"


const Pesan = () => {
  const [dipesan, setDipesan] = useState(false)

  return (
    <>
          <Back/>
          <div className="bg-cover bg-[url('/images/kuota_bg.png')] h-full w-full">

            
            <div className="pt-12">
              <Title text="Tambah Kuota"/>
            </div>
            <div className="pt-6 pb-12">
              <Paket kuota={20} harga={40000} />
              <Paket kuota={20} harga={40000} />
              <Paket kuota={20} harga={40000} />
              <Paket kuota={20} harga={40000} />
            </div>

          </div>
    </>

  )
}

export default Pesan