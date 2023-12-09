"use client";
import axios from 'axios';
import React, { useEffect } from 'react'

const Test = () => {
    useEffect(() => {
        const fetchData = async () => {
          //const form = { email: "admin@gmail.com", password: "admin" };
          const form = {
            email: "admin@gmail.com",
            password: "admin",
          };
          //   const res = await axios.get("http://localhost:8080/menu");
          const res2 = await axios.post("https://smart-dormitory-backend-service.000webhostapp.com/auth/", form);
          //   console.log(res.data);
          console.log(res2.data);
        };
        fetchData();
      }, []);
    
      return <div>TestAuth</div>;
    };



export default Test