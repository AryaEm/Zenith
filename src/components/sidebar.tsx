import Image from "next/image";
import Document from "@/app/_document";

export default function Sidebar() {
    return (
        <div className="w-80 h-dvh bgSidebar flex flex-col">
            <div className="px-10 pt-16 ">
                <h2 className="text-[28px] font-bold">Zenith</h2>
            </div>

            <div className="h-[1.5px] gradLine w-full my-8"></div>

            <div className="flex flex-col pl-10">
                <a href="" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-52" >
                    <i className="fa-solid fa-house text-2xl"></i>  Dashboard
                </a>
                <a href="" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-52" >
                    <i className="fa-solid fa-gamepad"></i> Game
                </a>
                <a href="" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-52" >
                    <i className="fa-solid fa-basket-shopping"></i> Order
                </a>
                <a href="" className="text-white hover:text-[#212A3E] bg-opacity-0 hover:bg-slate-400 hover:bg-opacity-60 transition-all duration-300 font-semibold rounded-lg my-2 px-6 py-3 w-52" >
                    <i className="fa-solid fa-clock-rotate-left"></i> History
                </a>
            </div>
        </div>
    );
}
