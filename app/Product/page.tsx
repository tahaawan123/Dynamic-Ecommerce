
"use client";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";


import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/Button";


interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const  Product = () => {
  
  const [data, setData] = useState<Products[]>([]);
  useEffect(() => {
   

    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const parsedResponse: Products[] = await response.json();
      console.log(parsedResponse);
      setData(parsedResponse);
      
    };
    fetchData();
  }, []);
  

  return (
    <div className=" pt-8  bg-black min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-8 text-white font-mono md:text-5xl ">Products List</h1>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-6  gap-6 mb-11">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg px-4 pt-4 shadow-md bg-white hover:scale-105 transition-transform flex flex-col "
          >
           
  
           
               {/* Image Section */}
            <div className="mt-2 h-40 w-full flex justify-center">
              <Image
                src={item.image}
                alt={item.title}
               
                width={250}
                height={250}
                 className="w-auto h-full object-contain rounded-md"
              />
            </div>
              <h3 className="text-lg font-medium ">{item.title}</h3>
              <p className="text-sm text-white">{item.category}</p>
              <p className="text-md font-bold text-red-600">${item.price}</p>
             
              <div className="mt-2">
                <span className="text-yellow-500"> <span className="flex"><IoIosStar/><IoIosStar/><IoIosStar/><IoIosStar/></span> {item.rating.rate}</span>
                <span className="text-gray-900 ml-2">({item.rating.count})</span>
              </div>
             <p><Link href ={`/Product/${item.id}`}> <Button/></Link></p>
              
            </div>
          
        ))}
      </div>
    
     
    </div>
  );
}  

export default Product;
