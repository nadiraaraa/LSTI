"use client";
import { Header, Sidebar, Back, Title, MenuCard} from "../components"
import {useState} from 'react';

const Pesan = () => {
  const [multiple, setMultiple] = useState(false)

  return (
    <>
        <Back/>
        <div className="md:hidden">
          <img src="/images/menu_bg.png" className="w-screen"></img>
        </div>
      {/* <div className="h-44 z-0 relative"></div> */}
        <div className=" bg-[#6E7B43] z-20 pb-24">
            <div className='relative mt-[-20px] min-h-fit md:mt-0 md:pt-12'>
              <Title text = "Pesan Menu"/>
            </div>
            <div>
                <div className="px-4 text-md pt-6 grid grid-cols-2 text-black md:mx-20">
                    <p className='text-left'>Pesanan kamar #5207</p>
                    <div>
                      <p className='text-right'>Pesan &gt;1&nbsp;&nbsp;
                      <input type="checkbox" onChange={()=>setMultiple(!multiple)} id="multiple" name="multiple" value="multiple" className="p-2"/>
                      </p>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 w-full content-center mb-12">
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
            </div>
            <div className="w-full sticky bottom-20 contents-center text-center top-[540px] m-auto">
              {multiple ?
              <form action="/Pesan/Submitted">
                <button className='text-xl font-bold bg-[#DE521E] p-4 rounded-lg border-1 border-black h-fit text-center'>Pesan Sekarang</button>
              </form>
              : <></>}
            </div>
            
        </div>
    </>
  )
}

export default Pesan