"use client";

import React, { useState, useLayoutEffect, ChangeEvent, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

interface DataMasuk {
  email: string;
  password: string;
}

const Masuk = () => {

  const [data, setData] = useState<DataMasuk>({
    email: "",
    password: ""
  })

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoadingSubmit(true);
    try {
      const res = await axios.post("http://localhost:8080/auth", data);
      console.log(res.data);

      if (res.data.status === 200) {
        const cookies = new Cookies();

        
        cookies.set("token", res.data.token, { path: "/" });
        cookies.set("payload", res.data.payload, { path: "/" });
        // }
        setEmailError(false);
        setPasswordError(false);
        if (res.data.payload.role === "user") {
          window.location.href = "/";
        } else {
          window.location.href = "/menu";
        }
      } else if (res.data.response.status === 404) {
        setEmailError(true);
        setPasswordError(false);
      } else if (res.data.status === 401) {
        setPasswordError(true);
        setEmailError(false);
      }
    } catch (err) {
      console.log(err);
      setEmailError(true);
      setPasswordError(true);
    } finally {
      // setLoadingSubmit(false);
    }
  };


  return (
    <>
      <div className="bg-[#FFFCDB] w-screen h-screen">
        <div className="flex justify-center items-center pt-24 ">
          <img alt="" src="/images/logo.png" className="w-36"></img>
        </div>
        <p className="font-bold text-xl text-center">Log In to Smart Dormitory</p>

        <form onSubmit={handleSubmit} className="p-8 text-lg md:px-80">
          <div className="p-2">
            <label htmlFor="email" className="block" >Email</label>
            <input type="email" name="email" id="email" defaultValue={data.email} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required></input>
            <i className="text-red-700">
              {emailError && "Terdapat kesalahan"}
            </i>
          </div>
          <div className="p-2">
            <label htmlFor="password" className="block" >Password</label>
            <input type="password" name="password" id="password" defaultValue={data.password} onChange={handleInputChange}
              className="border border-[#DE521E] rounded-md w-full"
              required></input>
            <i className="text-red-700">
              {passwordError && "Terdapat kesalahan"}
            </i>
          </div>
          <div className="text-center pt-12">
            <button type="submit" className='text-lg font-bold bg-[#DE521E] py-2 px-8 rounded-lg border-1 border-black h-fit text-center'>LOG IN</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Masuk