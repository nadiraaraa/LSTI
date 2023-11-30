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
    <div className='flex'>
        <p>{time}</p>
        <img src={img} className='w-20'></img>
        <div>
            <p>{title}</p>
            <p>{desc}</p>
        </div>
        <button>Pesan Sekarang</button>
    </div>
  )
}

export default Menu