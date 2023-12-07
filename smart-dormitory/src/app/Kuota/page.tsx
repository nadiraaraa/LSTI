"use client";
import { useState } from "react"
import { Header, NavBar, Title, Paket, Back} from "../components"


const Pesan = () => {
  const [dipesan, setDipesan] = useState(false)

  return (
    <>
      <Header role="user"/>
      <Back/>
        <div className="">
          <div className="fixed w-full z-[-10]">
            <img src="/images/kuota_bg.png" className="w-full"></img>
          </div>
          
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
          
      <NavBar role="user" view="kuota"/>
    </>
  )
}

export default Pesan