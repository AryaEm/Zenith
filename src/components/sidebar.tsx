'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiGamepadFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaShoppingBasket } from "react-icons/fa";

export default function Sidebar() {

    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible)
    }

    return (
        <div className="p-3 h-dvh w-[80%] xl:w-[20%] ">
            <div onClick={toggleSidebar} className="burgerMenu absolute z-10 left-4 top-4 bg-slate-950 h-12 w-12 rounded-2xl flex flex-col items-center justify-center gap-1 cursor-pointer shadow-[0_0_4px_rgba(8,_112,_184,_0.4)]  ">
                <div className="h-[1.9px] rounded-xl w-5 bg-slate-200"></div>
                <div className="h-[1.9px] rounded-xl w-5 bg-slate-200"></div>
                <div className="h-[1.9px] rounded-xl w-5 bg-slate-200"></div>
            </div>

            <div className={`w-full z-20 h-full sidebarBlur bgSidebar flex rounded-2xl flex-col transform transition-all duration-700 ${
                isSidebarVisible ? "translate-x-0" : "-translate-x-96"
            } `}>
                <div className="px-10 pt-16 ">
                    <h2 className="text-[28px] font-bold text-white">Zenith</h2>
                </div>

                <div className="h-[1.5px] gradLine w-full my-8"></div>

                <div className="flex flex-col pl-10 h-full ">
                    <Link href="dashboard" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-44 flex gap-2 items-start" >
                        <TiHome className="text-[22px] w-5 h-5" /> Dashboard
                    </Link>
                    <Link href="" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-44 flex gap-2 items-center" >
                        <RiGamepadFill className="text-[22px] w-5 h-5" /> Game
                    </Link>
                    <Link href="order" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-44 flex gap-2 items-center" >
                        <FaShoppingBasket className="text-[22px] w-5 h-5" /> Order
                    </Link>
                    <Link href="" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-44 flex gap-2 items-center" >
                        <IoGameController className="text-[22px] w-5 h-5" /> My Game
                    </Link>
                    <a href="" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-44 flex gap-2 items-center" >
                        <FaHistory className="text-[22px] w-5 h-5" /> History
                    </a>
                </div>  

                <div className="h-[1.5px] gradLine w-full my-6"></div>

                <div className="h-20 pl-10">
                    <a href="" className="text-slate-400 font-normal rounded-lg my-2 px-6 py-3 h-fit w-44 ">
                        <button type="submit" className="flex gap-2">
                            <TbLogout2 className="text-[22px] w-5 h-5"/>
                            Logout
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}