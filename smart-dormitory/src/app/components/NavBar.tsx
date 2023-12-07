"use client";
import React, {FC} from 'react';
import {useState} from 'react';

interface NavBarIn {
    role: string;
    view: string;
}

const NavBar: FC<NavBarIn> = ({role, view}) => {
    const [nav, setNav] = useState("None")

  return (
    <>
        <div className="bg-[#FFFCDB] h-40 bottom-0 fixed w-screen border-2 border-[#DE521E]">
            <div className="flex item-center m-auto text-center w-fit text-[#DE521E]">
                <a href={`${role =="user" ? "/Kuota" : "/LihatPesanan"}`} className='p-4'>
                    <img src="/images/pesanan.png" className={`${view =="kuota" ? "h-24" : "h-24 pt-4"}`}></img>
                    { role == "user" ?
                    <p>Kuota</p>
                    : <p>Pesanan</p>
                    }
                    
                </a>
                <a href={`${role =="user" ? "/Pesan" : "/TambahMenu"}`} className='p-4'>
                    <img src="/images/menu.png" className={`${view =="menu" ? "h-24" : "h-24 pt-4"}`}></img>
                    { role == "user" ?
                    <p>Pesan</p>
                    : <p>Tambah</p>
                    }
                </a>
                <a href={`${role =="user" ? "/Profil/User" : "/Profil/Caterer"}`} className='p-4'>
                    <img src="/images/profil.png" className={`${view =="profil" ? "h-28" : "h-24 pt-4"}`}></img>
                    <p>Profil</p>
                </a>
            </div>
        </div>
        <div className="h-36"></div>
    </>
    
  )
}

export default NavBar