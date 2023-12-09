"use client";
import { ChangeEvent, useState } from "react";
import { Header, Sidebar, Title} from "../components"

interface MenuIn{
  imgpath: string;
  name: string;
  description: string;
  date: Date | null;
  category: string;
}

const TambahMenu = () => {
  const [data, setData] = useState<MenuIn>({
    imgpath: "",
    name: "",
    description: "",
    date: null,
    category: "",
  })

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    // setData({ ...{name}, [name]: value });    
  };

  return (
    <>
        <div className="bg-[#6E7B43] mb-18 h-full">
          <div className="pt-8">
            <Title text="Tambah Menu" />
          </div>
          <form action="/TambahMenu/Submitted" className="p-4 text-md bg-[#FFFCDB] m-6 rounded-lg md:mx-36">
            <div className="p-2">
              <label htmlFor="date" className="block" >Tanggal</label>
              <input type="date" id="date"  onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required/>
            </div>
            <div className="p-2">
              <label htmlFor="kategori" className="block" >Kategori</label>
              <select id="kategori" defaultValue={data.category} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required>
              <option value="pagi" className=" text-sm">Pagi</option>
              <option value="malam" className=" text-sm">Malam</option>
              </select>
            </div>
            <div className="p-2">
              <label htmlFor="judul" className="block" >Judul Menu</label>
              <input type="text" id="judul" defaultValue={data.name} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required/>
            </div>
            <div className="p-2">
              <label htmlFor="deskripsi" className="block" >Deskripsi</label>
              <input type="text" id="deskripsi" defaultValue={data.description} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required/>
            </div>
            <div className="p-2">
              <label htmlFor="imgpath" className="block" >Upload Foto</label>
              <input type="file" id="imgpath" defaultValue={data.imgpath} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required accept=".jpg,.png"/>
            </div>
            <div className="text-center pt-6 py-2">
            <button className='text-lg  bg-[#DE521E] py-2 px-8 rounded-lg  font-bold border-2 border-black h-fit text-center'>TAMBAH MENU</button> 
            </div>
          </form>
          <div className="h-screen"></div>
        </div>
  </>

  )
}

export default TambahMenu