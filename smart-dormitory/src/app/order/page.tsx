"use client";
import { Header, Sidebar, Back, Title, MenuCard, Menu} from "../components"
import {useState, useEffect} from 'react';
import Cookie from "universal-cookie";
import axios from "axios";

interface MenuIn{
  id: number;
  imgpath: string;
  name: string;
  description: string;
  date: Date;
  category: string;
}

interface OrderOut{
  userId : Number;
  name: String;
  roomId : Number;
  phone : String;
  menuId : Number[];

}

const Pesan = () => {
  const [multiple, setMultiple] = useState(false)
  const [form, setForm] = useState<OrderOut>();
  const [data, setData] = useState<MenuIn[]>([]);
  var today = new Date();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const Cookies = new Cookie();
      const token = Cookies.get("token");
      const res = await axios.post(`/api/user/order`, form, {
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
    <>
        <Back/>
        <div className="md:hidden">
          <img  alt="" src="/images/menu_bg.png" className="w-screen"></img>
        </div>
      {/* <div className="h-44 z-0 relative"></div> */}
        <div className=" bg-[#6E7B43] z-20 pb-24">
            <div className='relative mt-[-20px] min-h-fit md:mt-0 md:pt-12'>
              <Title text = "Pesan Menu"/>
            </div>
            <div>
                <div className="px-4 text-md pt-6 grid grid-cols-2 text-black md:mx-20">
                    <p className='text-left'>Pesanan kamar #5207</p>
                    <div>
                      <p className='text-right'>Pesan &gt;1&nbsp;&nbsp;
                      <input type="checkbox" onChange={()=>setMultiple(!multiple)} id="multiple" name="multiple" value="multiple" className="p-2"/>
                      </p>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 w-full content-center mb-12">
              {data.map((item, idx) =>
                {
                  return (
                    <div key={idx} className='bg-[#FFFCDB]  rounded-lg px-2 pt-2 w-fit md:mx-auto m-4'>
                      {item.date > today ?
                      <Menu category={item.category} img={item.imgpath} title={item.name} desc={item.description} ordered={false} multiple={multiple}/>
                        : <></>
                    }
                    </div>
                  )
                })}
              {/* <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/>
              <MenuCard multiple={multiple} date="23 Nov"/> */}
            </div>
            <div className="w-full sticky bottom-20 contents-center text-center top-[540px] m-auto">
              {multiple ?
              <form onSubmit={handleSubmit}>
                <button className='text-xl font-bold bg-[#DE521E] p-4 rounded-lg border-1 border-black h-fit text-center'>Pesan Sekarang</button>
              </form>
              : <></>}
            </div>
            
        </div>
    </>
  )
}

export default Pesan