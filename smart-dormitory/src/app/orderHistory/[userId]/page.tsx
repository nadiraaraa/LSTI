"use client";
import React, { useLayoutEffect, useState } from "react";
import {FC} from "react";
import { Header, Sidebar, Title, Back} from "../../components"
import Sejarah from "../../components/Sejarah";
import { Baskervville } from "next/font/google";
import Cookie from "universal-cookie";
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
    const fetchData = async () => {
      try {
        const Cookies = new Cookie();
        const token = Cookies.get("token");
        const res = await axios.get(`/api/orderHistory/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRawData(res.data);

        rawData.forEach((x, i) => {
          const res = await axios.get(`/api/orderHistory/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        })
      } catch (err) {
        // toast.error("Error fetching data");
        console.log(err);
      } finally {
        // setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <>
        <Back/>
        <div className=" bg-[#6E7B43] mb-18 min-h-screen">
          <div className="pt-8 py-4">
            <Title text="Sejarah Pesanan" />
          </div>
          <div className="bg-[#FFFCDB] p-4 m-4 mt-2 rounded-lg  text-left my-4 mx-4 lg:mx-auto lg:flex lg:flex-wrap lg:w-[990px]">
            <div className="">
              {data.map((item, idx) =>
                {
                  return (
                    <div key={idx}>
                      <Sejarah date={data.date} time="pagi" img={data.img} title={data.name} desc={data.description} />
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
  </>
  )
}

export default History