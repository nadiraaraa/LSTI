import React, {FC} from 'react'
import Pesan from '../Kuota/page'

interface PaketIn{
    kuota: number;
    harga: number;
}

const Paket: FC<PaketIn>= ({kuota, harga}) => {
  return (
    <div className='bg-[#FFFCDB] m-4 p-4 px-6 rounded-lg'>
        <p className='font-bold'>Paket {kuota} kuota</p>
        <p>Harga: Rp{harga}</p>
        <div className='text-center pt-4'>
          <button className=' bg-[#DE521E] py-2 px-6 rounded-lg border-1 border-black h-fit text-center'>Beli Sekarang</button>
        </div>
    </div>
  )
}

export default Paket