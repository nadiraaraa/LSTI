"use client";
import { Header, Sidebar, Title} from "../components"
import {useState, useEffect, ChangeEvent, useLayoutEffect} from 'react';
import Cookie from "universal-cookie";
import axios from "axios";

interface OrderIn{
  id : Number,
  userId : Number,
  name: String,
  roomId : Number,
  phone : String,
  menuId : Number
}

interface Form{
  date: Date | undefined,
  category: String
}

const Pesan = () => {
  const [orders, setOrders] = useState<OrderIn[]>([]);
  const [form, setForm] = useState<Form>({
    date: undefined,
    category : "pagi"
  });

    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/order?date=${form.date}&category=${form.category}`, {});
        setOrders(res.data);
      } catch (err) {
        // toast.error("Error fetching data");
        console.log(err);
      } finally {
        // setLoading(false);
      }
    };
    
  const handleInputChange = async (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });    

      fetchData();
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  
  return (
    <>
        <div className=" bg-[#6E7B43] mb-18 min-h-screen">
          <div className="pt-8 py-4">
            <Title text="Lihat Pesanan" />
          </div>
          <form className="flex justify-between  my-4 mx-4 md:mx-36">
            <div className="">
                <input type="date" id="date"
                className="border border-[#DE521E] rounded-md w-full"
                required onChange={handleInputChange}></input>
              </div>
              <div className="">
                <select id="kategori"
                className="border border-[#DE521E] rounded-md w-full"
                required onChange={handleInputChange}>
                <option value="pagi" className=" text-sm">Pagi</option>
                <option value="malam" className=" text-sm">Malam</option>
                </select>
              </div>
          </form>
          <div className="bg-[#FFFCDB] p-4 m-4 mt-2 rounded-lg  text-left my-4 mx-4 md:mx-36">
            <img src="/images/menus/menu_1.png" className="p-4"/>
            <table className="">
              <tbody>
                <tr>
                  <th className="pr-3 md:w-60">Nama</th>
                  <th className="font-normal">Nama ABC</th>
                </tr>
                <tr>
                  <th className="pr-3">Deskripsi</th>
                  <th className="font-normal">Deskripsi ABC</th>
                </tr>
                <tr>
                  <th className="pr-3">Nomor Kamar</th>
                  <th className="font-normal">
            {orders.map((item, idx) =>
              {
                return (
                  <div key={idx}>
                    <span>{item.roomId.toString()}&nbsp;</span>
                  </div>
                )
              })}
            
                 </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  </>
  )
}

export default Pesan