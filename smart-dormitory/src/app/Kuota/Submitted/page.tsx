"use client";
import { useState } from "react"
import { Header, NavBar, Title, Paket, Back} from "../../components"


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
            <div className="pt-48">

              <div className="bg-[#DE521E] mx-24 py-4 rounded-lg ">
                <p className="text-xl text-white text-center">Kuota berhasil ditambahkan!</p>
              </div>
              </div>
              </div>

        <NavBar role="user" view="kuota"/>
    </>
    )
}

export default Pesan