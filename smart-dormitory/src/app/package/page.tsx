"use client";
import { useEffect, useLayoutEffect, useState } from "react"
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

interface TokenPayload {
  userId: number;
  role: string;
  roomId: number;
  quota: number;

}

const Package = () => {
  const [tokenPayload, setTokenPayload] = useState<TokenPayload>({
    userId: 0,
    role: "",
    roomId: 0,
    quota: 0
  });


  const [data, setData] = useState<packageDataType[]>([]);

  useEffect(() => {
    const fetchData = async (token: string) => {
      try {
        const res = await axios.get("http://localhost:8080/package", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);

        if (res.status === 401) {
          window.location.href = "/auth";
        } else {
          setData(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const Cookie = new Cookies();
    const role = Cookie.get("payload").role;
    if (role !== "user") {
      window.location.href = "/auth";
    } else {
      const token: string = Cookie.get("token");
      fetchData(token);
      setTokenPayload(Cookie.get("payload"));
      console.log(tokenPayload);
    }
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
                    <Paket id={tokenPayload.userId} inKuota={tokenPayload.quota} value={item.id} kuota={item.quota} harga={item.price} desc={item.description}/>
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