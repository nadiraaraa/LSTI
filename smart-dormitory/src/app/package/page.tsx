"use client";
import { useEffect, useState } from "react"
import { Header, Sidebar, Title, Paket, Back} from "../components"
import Cookies from "universal-cookie";
import axios from "axios";


interface packageDataType {
  id: number;
  name: string;
  price: number;
  description: string;
  quota: number;
}

const Package = () => {
  // const [dipesan, setDipesan] = useState(false)
  // const pageData: string[] = [
  //   "id",
  //   "name",
  //   "price",
  //   "description",
  //   "quota"
  // ];

  const [data, setData] = useState<packageDataType[]>([]);

  // const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async (token: string) => {
      try {
        const res = await axios.get("/api/packages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status === 401) {
          window.location.href = "/auth";
        } else {
          setData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    // const Cookie = new Cookies();
    // const role = Cookie.get("payload").role;
    // if (role === "Admin") {
    //   window.location.href = "/unauthorized";
    // } else {
    //   const token: string = Cookie.get("token");
    //   fetchData(token);
    // }
  }, []);

  return (
    <>
          <Back/>
          <div className="bg-cover bg-[url('/images/kuota_bg.png')] h-full w-full">

            
            <div className="pt-12">
              <Title text="Tambah Kuota"/>
            </div>
            <div className="pt-6 pb-12">
              {data.map((item, idx) =>
              {
                return (
                  <div key={idx}>
                    <Paket key={idx} kuota={item.quota} harga={item.price} desc={item.description}/>
                  </div>
                )
              })}
            </div>
            <div className="h-screen"></div>

          </div>
    </>

  )
}

export default Package