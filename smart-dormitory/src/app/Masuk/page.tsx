"use client";
import { ChangeEvent, useState } from "react";

interface DataMasuk {
  username: string;
  password: string;
}

const Masuk = () => {
  const [data, setData] = useState<DataMasuk>({
    username: "",
    password: ""
  })

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    // setData({ ...{name}, [name]: value });    
  };



  return (
    <>
    <div className="bg-[#FFFCDB] w-screen h-screen">
      <div className="flex justify-center items-center pt-24 ">
        <img src="/images/logo.png" className="w-36"></img>
      </div>
      <p className="font-bold text-xl text-center">Log In to Smart Dormitory</p>
      <form action="/LihatPesanan" className="p-8 text-lg">
        <div className="p-2">
          <label htmlFor="email" className="block" >Email</label>
          <input type="email" id="email" defaultValue={data.username} onChange={handleInputChange}
          className="border border-[#DE521E] rounded-md w-full"
          required></input>
        </div>
        <div className="p-2">
          <label htmlFor="password" className="block" >Password</label>
          <input type="password" id="password" defaultValue={data.password} onChange={handleInputChange}
          className="border border-[#DE521E] rounded-md w-full"
          required></input>
        </div>
        <div className="text-center pt-12">
         <button className='text-lg font-bold bg-[#DE521E] py-2 px-8 rounded-lg border-1 border-black h-fit text-center'>LOG IN</button> 
        </div>
      </form>
    </div>
    </>
  )
}

export default Masuk