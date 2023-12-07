import React, {FC} from 'react'
import Pesan from '../Kuota/page'

interface PaketIn{
    kuota: number;
    harga: number;
}

const Paket: FC<PaketIn>= ({kuota, harga}) => {
  return (
    <div className='bg-[#FFFCDB] m-4 md:mx-44 p-4 px-6 rounded-lg'>
        <p className='font-bold'>Paket {kuota} kuota</p>
        <p>Harga: Rp{harga}</p>
        <form action="/Kuota/Submitted" className='text-center pt-4'>
          <button className=' bg-[#DE521E] py-2 px-6 rounded-lg border-1 border-black h-fit text-center'>Beli Sekarang</button>
        </form>
    </div>
  )
}

export default Paket