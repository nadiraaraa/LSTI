import React, {FC} from 'react'

interface MenuIn{
    time: string;
    img: string;
    title: string;
    desc: string;
    ordered: boolean;
    multiple: boolean;
}

const Menu: FC<MenuIn> = ({time, img, title, desc, ordered, multiple}) => {
  return (
    <div className='flex p-3 py-4 text-sm'>
      <div className='w-2 pt-12 pr-3'>
        <p className="rotate-[-90deg] font-bold text-center text-[#DE521E]">{time}</p>
      </div>

        <img src={img} className='w-36 '></img>
        <div className='px-2'>
            <p className='font-bold'>{title}</p>
            <p>{desc}</p>
        </div>
        <div className=''>
            {multiple ? 
            <input type="checkbox"  id="multipleMenu" name="multipleMenu" value="multipleMenu" className="relative mt-10 scale-150"/>
            : <button className='bg-[#DE521E] p-2 rounded-lg border-1 border-black h-fit align-middle'>Pesan Sekarang</button> 
             }
          </div>
    </div>
  )
}

export default Menu