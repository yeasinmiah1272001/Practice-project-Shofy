"use client"
import Image from "next/image";


import Container from "@/Container/Container";
import { FaRegUser } from "react-icons/fa";
import { IoBagOutline, IoClose, IoSearch } from "react-icons/io5";
import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { logo } from "@/assets";
import Link from "next/link";

const MiddleHeader = () => {
  const [search, setSearch] = useState("")
  return (
    <Container className="py-7">
      <div className="flex items-center justify-between">
        <Image className="w-32" src={logo} alt="logo" />
        {/* input */}
        <div className="flex-1 relative mx-12">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products here..."
            className="w-full border-2 border-gray-600 focus-visible:border-themeColor outline-none h-10 pl-4 pr-20"
          />
          <span className="bg-themeColor text-white inline-flex w-10 h-10 items-center justify-center text-xl absolute top-0 right-0 border-gray-600">
            <IoSearch />
          </span>
          {search && (
            <IoClose
              onClick={() => setSearch("")}
              className="absolute text-xl top-2.5 right-12 text-gray-600 hover:text-red-500 duration-200 cursor-pointer"
            />
          )}
        </div>
        {/* content */}
        <div>
          <div className="flex gap-3 items-center">
            <div className="border-2 border-gray-600 p-3 text-xl rounded-full">
              <FaRegUser />
            </div>
            <div>
              <h1 className="text-sm">Hello,Guest</h1>
              <p className=" font-serif">Login /register </p>
            </div>

            <Link href={"/favourite"} className="relative">
              <MdFavoriteBorder className="text-3xl text-gray-600" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-themeColor text-white w-4 h-4 font-semibold rounded-full inline-flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href={"/cart"} className="relative">
              <IoBagOutline className="text-3xl text-gray-600" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-themeColor text-white w-4 h-4 font-semibold rounded-full inline-flex items-center justify-center">
                12
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MiddleHeader;
