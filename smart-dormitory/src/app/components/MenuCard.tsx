import React, { FC } from 'react'
import { Menu } from '.'

interface MenuCardIn{
  multiple: boolean;
  date: string;
}

const MenuCard:FC<MenuCardIn> = ({multiple, date}) => {
  return (
    <div className='bg-[#FFFCDB] m-4 rounded-lg px-2 pt-2'>
        <p  className=' text-[#DE521E] text-xl font-bold pl-1 pt-1'>{date}</p>
        <Menu time='Pagi' img="/images/menus/menu_1.png" title="Ayam Geprek Pedes Asin" desc="Ayam" ordered={true} multiple={multiple} />
        <div className='h-0.5 w-full bg-[#DE521E] mb-1'></div>
        <Menu time='Malam' img="/images/menus/menu_2.png" title="Ayam Geprek Pedes Asin" desc="Ayam Geprek, Nasi, Lalap" ordered={false} multiple={multiple} />

    </div>
  )
}

export default MenuCard