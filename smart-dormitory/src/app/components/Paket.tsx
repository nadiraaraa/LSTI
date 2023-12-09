import axios from 'axios';
import React, {FC, useState} from 'react'
import Cookie from 'universal-cookie';
// import Pesan from '../Kuota/page'

interface PaketIn{
    key: number;
    kuota: number;
    desc: String;
    harga: number;
}

const Paket: FC<PaketIn>= ({kuota, desc, harga}) => {
  const [id, setId] = useState(0);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const Cookies = new Cookie();
      const token = Cookies.get("token");
      const res = await axios.patch(`/api/user/quota/${id}`, id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        // toast.success("Data updated successfully");
      }
    } catch (err) {
      console.log(err);
      // setTimeout(toast.error("Something went wrong"), 100);
    } finally {
      setTimeout(() => {
        window.location.href = "packages/Submitted";
      }, 1000); // Delayed by 2000 milliseconds (2 seconds)
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