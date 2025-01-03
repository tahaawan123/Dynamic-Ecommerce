import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHome, FaBox, FaInfoCircle, FaPhone } from "react-icons/fa";


import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  import { RiMenu3Fill } from "react-icons/ri";



const Header = () => {
  return (
    <div>
    <header className="bg-[#4BC59E]">
      <div className=" mx-auto flex justify-between items-center p-4 md:px-8 ">
        {/* Logo or Title */}
        <div className="text-xl font-bold">Taha Brand</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="./" className="flex items-center space-x-2 hover:text-white transition">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="/Product" className="flex items-center space-x-2 hover:text-white transition">
            <FaBox />
            <span>Products</span>
          </Link>
          <Link href="/About" className="flex items-center space-x-2 hover:text-white transition">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link href="/Contact" className="flex items-center space-x-2 hover:text-white transition">
            <FaPhone />
            <span>Contact</span>
          </Link>
        </nav>

        {/* Shopping Cart Icon */}
        <Link href={"/Cart"}>
        <AiOutlineShoppingCart className="text-2xl hover:text-white transition cursor-pointer " />
        </Link>

      {/* Mobile Navigation */}
      <div className="md:hidden">
      <Sheet >
  <SheetTrigger><RiMenu3Fill/> </SheetTrigger>
  <SheetContent className="w-[200px] sm:w-[300px]">
  <nav className=" space-y-8">
          <Link href="./" className="flex items-center space-x-2 hover:text-white transition">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link href="/Product" className="flex items-center space-x-2 hover:text-white transition">
            <FaBox />
            <span>Products</span>
          </Link>
          <Link href="/About" className="flex items-center space-x-2 hover:text-white transition">
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link href="/Contact" className="flex items-center space-x-2 hover:text-white transition">
            <FaPhone />
            <span>Contact</span>
          </Link>
        </nav>
     
  </SheetContent>
</Sheet>
</div>

</div>
    </header>
    </div>
  );
};

export default Header;
