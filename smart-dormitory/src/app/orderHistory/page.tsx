"use client";
import { Header, Sidebar, Title} from "../components"
import {useState, useEffect, ChangeEvent, useLayoutEffect} from 'react';
import Cookie from "universal-cookie";
import axios from "axios";
import Cookies from "universal-cookie";

interface OrderIn{
  id : Number,
  userId : Number,
  name: String,
  roomId : Number[],
  phone : String,
  menuId : Number
}

interface Form{
  date: Date,
  category: String
}

const Pesan = () => {
  const [orders, setOrders] = useState<OrderIn[]>([]
    // id : 0,
    // userId : 0,
    // name: "",
    // roomId : [],
    // phone : "",
    // menuId : 0,
  );
  const [form, setForm] = useState<Form>({
    date: new Date(),
    category : "pagi"
  });

    
    
  const handleInputChange = async (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });    

      // fetchData();
  };

  useLayoutEffect(() => {
    const fetchData = async (token: string) => {
      try {
        // const res = await axios.get(`http://localhost:8080/order?date=2023/12/17&category=${form.category}`, {
          const res = await axios.get(`http://localhost:8080/order`, {
            headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(res.data);
        console.log(res.data);
      } catch (err) {
        // toast.error("Error fetching data");
        console.log(err);
      } finally {
        // setLoading(false);
      }
    };
    
    const Cookie = new Cookies();
    const role = Cookie.get("payload").role;
    if (role !== "admin") {
      window.location.href = "/auth";
    } else {
      const token: string = Cookie.get("token");
      fetchData(token);
    }
  }, []);

  
  return (
    <>
        <div className=" bg-[#6E7B43] mb-18 min-h-screen">
          <div className="pt-8 py-4">
            <Title text="Lihat Pesanan" />
          </div>
          {/* <form className="flex justify-between  my-4 mx-4 md:mx-36">
            <div className="">
                <input type="date" id="date"
                className="border border-[#DE521E] rounded-md w-full"
                required name="date" defaultValue="2023/12/17" onChange={handleInputChange}></input>
              </div>
              <div className="">
                <select id="kategori"
                className="border border-[#DE521E] rounded-md w-full"
                required name="category" onChange={handleInputChange}>
                <option value="pagi" className=" text-sm">Pagi</option>
                <option value="malam" className=" text-sm">Malam</option>
                </select>
              </div>
          </form> */}
          <div className="bg-[#FFFCDB] p-4 m-4 mt-2 rounded-lg  text-left my-4 mx-4 md:mx-36">
            <table className="w-full">
              <thead>
                <tr>
                  <th>menuId</th>
                  <th>userId</th>
                  <th>name</th>
                </tr>
              </thead>
              <tbody className="font-light">
                {orders.map((item,idx) =>
                  <tr key={idx}>
                    <th className="font-normal">{item.menuId.toString()}</th>
                    <th className="font-normal">{item.roomId.toString()}</th>
                    <th className="font-normal">{item.name}</th>
                  </tr>
                )}
              </tbody>
            </table>

            {/* <img src="/images/menus/menu_1.png" className="p-4"/>
            <table className="">
              <tbody>
                <tr>
                  <th className="pr-3 md:w-60">Nama</th>
                  <th className="font-normal">{orders.name}</th>
                </tr>
                <tr>
                  <th className="pr-3">Deskripsi</th>
                  <th className="font-normal">{orders.menuId.toString()}</th>
                </tr>
                <tr>
                  <th className="pr-3">Nomor Kamar</th>
                  <th className="font-normal">
            {orders.roomId.map((item, idx) =>
              {
                return (
                  <div key={idx}>
                    <span>{item.toString()}&nbsp;</span>
                  </div>
                )
              })}
            
                 </th>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
  </>
  )
}

export default Pesan