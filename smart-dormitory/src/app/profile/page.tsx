"use client";
import React, {useState, useEffect} from 'react';
import {Header, Sidebar, Back, Title, Button} from '../components';
import { redirect } from 'next/navigation';
import Cookies from 'universal-cookie';

interface TokenPayload {
  id: string;
  name: string;
  email: string;
  quota: string;
  role: string;

}

const ProfilU = () => {
  const [tokenPayload, setTokenPayload] = useState<TokenPayload>({
    id: "",
    name: "",
    email: "",
    quota: "",
    role: ""
  });

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    if (!token) {
      window.location.href = "/auth";
    } else {
      setTokenPayload(cookies.get("payload"));
      console.log(cookies.get("payload"));
    }
  }, []);

  const handleSignOut = () => {
    const cookies = new Cookies();
    cookies.remove("token", { path: "/" });
    cookies.remove("payload", { path: "/" });
    window.location.href = "/auth";
  };

  return (
    <>
      <div className='bg-[#6E7B43] min-h-screen'>
        <Back/>
          <div className='pt-12'>
            <Title text = "Profil"/>
          </div>
          
          <div className="bg-[#FFFCDB] content-center my-4 mx-4 md:mx-36 rounded-lg py-8">
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Nama</p>
                <p className='text-right'>{tokenPayload.name}</p>
            </div>
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Id Kamar</p>
                <p className='text-right'>#{tokenPayload.id}</p>
            </div>
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Email</p>
                <p className='text-right break-words'>{tokenPayload.email}</p>
            </div>
            <div className="px-12 py-2 grid grid-cols-2 text-black">
                <p className='text-left font-bold'>Role</p>
                <p className='text-right break-words'>{tokenPayload.role}</p>
            </div>
            <div className='text-center pt-24 p-4 pb-0'>
              <form action="/auth">
              <button  onClick={handleSignOut}
                className="border-2 border-black  text-xl font-bold px-10 py-2 bg-[#DE521E] rounded-md text-center hover:bg-white">
                LOG OUT
                </button>
              </form>
              </div>
          </div>
          </div>
  </>
  )
}

export default ProfilU