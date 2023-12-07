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
        <div className='w-16 my-auto'>
            {ordered ?
            <div className='text-xs p-1 rounded-lg border border-[#DE521E] h-fit align-middle text-center'>Sudah Dipesan</div>
            : <div>
                {multiple ? 
                <div className='px-6'>
                  <input type="checkbox"  id="multipleMenu" name="multipleMenu" value="multipleMenu" className="relative scale-150"/>
                </div>
                : <form action="/Pesan/Submitted">
                    <button className='text-xs bg-[#DE521E] p-1 rounded-lg  h-fit align-middle'>Pesan Sekarang</button> 
                  </form>
                } 
                <div/>
              
            </div>
        }
          </div>
    </div>
  )
}

export default Menu