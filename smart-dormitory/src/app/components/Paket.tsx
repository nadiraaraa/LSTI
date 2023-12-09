import axios from 'axios';
import React, {FC, useState} from 'react'
import Cookie from 'universal-cookie';
import toast from 'react-hot-toast'
// import Pesan from '../Kuota/page'

interface PaketIn{
    id: string;
    inKuota: number;
    value: number;
    kuota: number;
    desc: String;
    harga: number;
}

const Paket: FC<PaketIn>= ({id, inKuota, value, kuota, desc, harga}) => {
  console.log(kuota);
  console.log(inKuota);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      console.log("trying");
      const Cookies = new Cookie();
      const token = Cookies.get("token");
      const res = await axios.patch(`http://localhost:8080/user/quota/${id}`, (inKuota+kuota), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        toast.success("Kuota berhasil ditambahkan");
        Cookies.set('quota', inKuota+kuota);

        setTimeout(() => {
          window.location.href = "package/Submitted";
        }, 10000); // Delayed by 2000 milliseconds (2 seconds)
      }
      
    } catch (err) {
      console.log(err);
      toast.error("Terdapat kesalahan");
    } finally {

    }
  };
  
  return (
    <div className='bg-[#FFFCDB] m-4 md:mx-44 p-4 px-6 rounded-lg'>
        <p className='font-bold'>Paket {kuota} kuota</p>
        <p>{desc}</p>
        <p>Harga: Rp{harga}</p>
        <form onSubmit={handleSubmit} className='text-center pt-4'>
          <button className=' bg-[#DE521E] py-2 px-6 rounded-lg border-1 border-black h-fit text-center'>Beli Sekarang</button>
        </form>
    </div>
  )
}

export default Paket