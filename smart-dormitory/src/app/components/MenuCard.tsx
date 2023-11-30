import React from 'react'
import { Menu } from '.'

const MenuCard = () => {
  return (
    <div className='bg-[#FFFCDB] m-4 rounded-lg p-2'>
        <p className='text-[#DE521E] text-xl font-bold'>Senin, 3 Nov 2023</p>
        <Menu time='pagi' img="/images/menus/menu_1.png" title="Ayam Geprek Pedes Asin" desc="Ayam" ordered={false} multiple={false} />
        <div className='h-0.5 w-full bg-[#DE521E]'></div>
        <Menu time='malam' img="/images/menus/menu_2.png" title="Ayam Geprek Pedes Asin" desc="Ayam" ordered={false} multiple={false} />

    </div>
  )
}

export default MenuCard