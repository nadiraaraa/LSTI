"use client";
import { ChangeEvent, useState } from "react";
import { Header, Sidebar, Title} from "../components"
import {toast} from 'react-hot-toast'
import Cookie from "universal-cookie";
import axios from "axios";

interface MenuIn{
  imgpath: string;
  name: string;
  description: string;
  date: string;
  category: string;
}

const TambahMenu = () => {
  const [data, setData] = useState<MenuIn>({
    imgpath: "",
    name: "",
    description: "",
    date: "",
    category: "pagi",
  })

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    // if (name=="date"){
    //   setData({ ...data, date: formatDate() });
    // } else {
    setData({ ...data, [name]: value }); 
    // }
    console.log(data);   
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      // const formData = new FormData();
      // formData.append("imgpath", data.imgpath);


      const Cookies = new Cookie();
      const token = Cookies.get("token");
      const res = await axios.post(`http://localhost:8080/menu`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        toast.success("Data updated successfully");
        setTimeout(() => {
          window.location.href = "/menu/submitted";
        }, 1000); // Delayed by 2000 milliseconds (2 seconds)
      }
    } catch (err) {
      console.log(err);
      setTimeout(toast.error("Something went wrong"), 100);
    } finally {
      
    }
  };

  return (
    <>
        <div className="bg-[#6E7B43] mb-18 h-full">
          <div className="pt-8">
            <Title text="Tambah Menu" />
          </div>
          <form onSubmit={handleSubmit} className="p-4 text-md bg-[#FFFCDB] m-6 rounded-lg md:mx-36">
            <div className="p-2">
              <label htmlFor="date" className="block" >Tanggal</label>
              <input name="date"  type="date" id="date"  onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required/>
            </div>
            <div className="p-2">
              <label htmlFor="kategori" className="block" >Kategori</label>
              <select name="category" id="kategori" defaultValue={data.category} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required>
              <option value="pagi" className=" text-sm">Pagi</option>
              <option value="malam" className=" text-sm">Malam</option>
              </select>
            </div>
            <div className="p-2">
              <label htmlFor="judul" className="block" >Judul Menu</label>
              <input name="name" type="text" id="judul" defaultValue={data.name} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required/>
            </div>
            <div className="p-2">
              <label htmlFor="deskripsi" className="block" >Deskripsi</label>
              <input name="description" type="text" id="deskripsi" defaultValue={data.description} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required/>
            </div>
            <div className="p-2">
              <label htmlFor="imgpath" className="block" >Upload Foto</label>
              <input name="imgpath" type="file" id="imgpath" defaultValue={data.imgpath} onChange={handleInputChange}
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

export default TambahMenu;

export const formatDate = (date: Date | null): string => {
  if (!date) return "";

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // JavaScript months are 0-based.
  const day = date.getDate();

  return `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;
};