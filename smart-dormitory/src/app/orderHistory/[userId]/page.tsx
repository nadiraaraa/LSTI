"use client";
import React, { useLayoutEffect, useState } from "react";
import {FC} from "react";
import { Header, Sidebar, Title, Back} from "../../components"
import Sejarah from "../../components/Sejarah";
import { Baskervville } from "next/font/google";
import Cookies from "universal-cookie";
import axios from "axios";
import { usePathname } from "next/navigation";

interface historyIn {
   id : Number,
   userId : Number, 
   name: String,
   roomId : Number,
   phone : String,
   menuId : Number
}

interface MenuIn{
    id: number;
    imgpath: string;
    name: string;
    description: string;
    date: Date;
    category: string;
  
}

const History = () => {
  const [rawData, setRawData] = useState<historyIn[]>([])
  const [data, setData] = useState<MenuIn[]>([])

  // Fetching Data
  const path = usePathname();
  const id = path.split("/")[2];

  useLayoutEffect(() => {
    const fetchData = async (token: string) => {
      try {
        const Cookie = new Cookies();
        const token = Cookie.get("token");
        const res = await axios.get(`/api/orderHistory/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRawData(res.data);

        // rawData.forEach((x, i) => {
        //   const res = await axios.get(`/api/orderHistory/${id}`, {
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   });
        // })
      } catch (err) {
        // toast.error("Error fetching data");
        console.log(err);
      } finally {
        // setLoading(false);
      }
    };
    const Cookie = new Cookies();
    const role = Cookie.get("payload").role;
    if (role !== "user") {
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
        <Back/>

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
                {rawData.map((item,idx) =>
                  <tr key={idx}>
                    <th className="font-normal">{item.menuId.toString()}</th>
                    <th className="font-normal">{item.roomId.toString()}</th>
                    <th className="font-normal">{item.name}</th>
                  </tr>
                )}
              </tbody>
            </table>

        {/* <div className=" bg-[#6E7B43] mb-18 min-h-screen">
          <div className="pt-8 py-4">
            <Title text="Sejarah Pesanan" />
          </div>
          <div className="bg-[#FFFCDB] p-4 m-4 mt-2 rounded-lg  text-left my-4 mx-4 lg:mx-auto lg:flex lg:flex-wrap lg:w-[990px]">
            <div className="">
              {data.map((item, idx) =>
                {
                  return (
                    <div key={idx}>
                      {/* <Sejarah date={data.date} time="pagi" img={data.img} title={data.name} desc={data.description} /> */}
                    {/* </div>
                  )
                })}
            </div> */}
          </div> 
        </div> 
  </>
  )
}

export default History