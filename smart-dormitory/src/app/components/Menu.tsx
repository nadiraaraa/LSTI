import React, {FC, useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import axios from "axios";

interface MenuIn{
    category: string;
    img: string;
    title: string;
    desc: string;
    ordered: boolean;
    multiple: boolean;
}
interface OrderOut{
  userId : Number;
  name: String;
  roomId : Number;
  phone : String;
  menuId : Number[];

}

const Menu: FC<MenuIn> = ({category, img, title, desc, ordered, multiple}) => {
  const [form, setForm] = useState<OrderOut>({
    userId: 0,
    name: "",
    roomId: 0,
    phone: "",
    menuId: []
  });

  useEffect(() => {
    const Cookie = new Cookies();
    const role = Cookie.get("payload").role;
    if (role !== "user") {
      window.location.href = "/auth";
    } else {
      const token: string = Cookie.get("token");
      setForm({
        userId: Cookie.get("payload").userId,
        name: Cookie.get("payload").name,
        roomId: Cookie.get("payload").roomId,
        phone: Cookie.get("payload").phone,
        menuId: []
      })
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const Cookie = new Cookies();
      const token = Cookie.get("token");
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
        window.location.href = "order/submitted";
      }, 1000); // Delayed by 2000 milliseconds (2 seconds)
    }
  };

  return (
    <div className='flex p-3 py-4 text-sm'>
      <div className='w-2 pt-12 pr-3'>
        <p className="rotate-[-90deg] font-bold text-center text-[#DE521E]">{category}</p>
      </div>

        <img  alt="" src={img} className='w-36 '></img>
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
                : <form onSubmit={handleSubmit}>
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