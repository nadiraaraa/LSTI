import React from "react";
import {FC} from "react";
import { Header, Sidebar, Title, Back} from "../../components"
import Sejarah from "../../components/Sejarah";
import { Baskervville } from "next/font/google";



const History = () => {
  return (
    <>
    <div className="flex flex-col h-full md:flex-row md:overflow-hidden">
      <div className="fixed flex z-40 md:relative md:flex-none md:w-[17rem]">
        <Sidebar role="user"/>
      </div>
      <div className="md:flex-grow  w-full bg-[#6E7B43]">
        
        <Header role="user"/>
        <Back/>
        <div className=" bg-[#6E7B43] mb-18 min-h-screen">
          <div className="pt-8 py-4">
            <Title text="Sejarah Pesanan" />
          </div>
          <div className="bg-[#FFFCDB] p-4 m-4 mt-2 rounded-lg  text-left my-4 mx-4 lg:mx-auto lg:flex lg:flex-wrap lg:w-[990px]">
            <div className="">
            <Sejarah date={null} time="pagi" img="/images/menus/menu_1.png" title="Ayam" desc="Ayam, Nasi, Tahu" />
            </div>
            <div className="">
            <Sejarah date={null} time="pagi" img="/images/menus/menu_1.png" title="Ayam" desc="Ayam, Nasi, Tahu" />
            </div>
            <div className="">
            <Sejarah date={null} time="pagi" img="/images/menus/menu_1.png" title="Ayam" desc="Ayam, Nasi, Tahu" />
            </div>
            <div className="">
            <Sejarah date={null} time="pagi" img="/images/menus/menu_1.png" title="Ayam" desc="Ayam, Nasi, Tahu" />
            </div>
          </div>
        </div>
        </div>
        </div>
  </>
  )
}

export default History