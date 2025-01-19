"use client"

import { ReactNode, useState, useEffect } from "react"
// import Image from "next/image"
import MenuItem from "./menuItem"
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

type MenuType = {
    id: string,
    path: string,
    label: string
}
type ManagerProp = {
    children: ReactNode,
    id: string,
    title: string,
    menuList: MenuType[]
}

export default function Navbar({ children, menuList }: ManagerProp) {
    // const [isSidebarVisible, setSidebarVisible] = useState(false)
    // const [inLoginPage, setInLoginPage] = useState("false")

    // const toggleSidebar = () => {
    //     setSidebarVisible(!isSidebarVisible)
    // }

    // useEffect(() => {
    //     setInLoginPage(localStorage.getItem("inLoginPage") === "true" ? "true" : "false")
    //     console.log(localStorage.getItem("inLoginPage") === "true" ? "true" : "false")
    // }, [])


    return (
        <>
            {/* <div className="absolute top-5 left-6 bg-zinc-800 flex p-3 z-[999] rounded-2xl border-2  border-red-500">
                <button onClick={toggleSidebar}>
                    <RxHamburgerMenu className="text-[1.2rem] text-white" />
                </button>
            </div> */}


            <div className="flex items-center fixed z-[999] w-full h-16 justify-center bg-[#fcfcfc]">

                {/* logo section */}
                <div className="w-fit ml-14 p-2 flex items-center gap-3">
                    <div className="bg-slate-400 w-8 h-8"></div>
                    <div className="border-green-800 flex items-center">
                        <p className="text-[262626] font-semibold playfair text-3xl">Zenith</p>)
                    </div>
                </div>
                {/* end logo section */}


                {/* Search bar section */}
                <div className="relative hidden md:flex items-center w-[260px] ml-20">
                    <IoSearchOutline className="absolute text-xl left-4 text-[#6E6E73]" />
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full h-10 pl-10 pr-4 rounded-xl bg-transparent border-2 border-zinc-300 text-gray-900 placeholder-gray-500"
                    />
                </div>
                {/* end Search bar section */}


                {/* menu section */}
                <div className="w-fit hidden md:flex ml-auto mr-14">
                    <div className="px-5 flex">
                        {
                            menuList.map((menu, index) => (
                                <MenuItem
                                    label={menu.label}
                                    path={menu.path}
                                    key={`keyMenu${index}`} />
                            ))
                        }
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href={'/login'} className="flex items-center px-4 font-medium text-[#262626] ">
                            <span>Sign Up</span>
                        </Link>
                        <Link href={'/login'} className="flex items-center px-4 font-medium p-2 text-white primary rounded-lg">
                            <span>Sign In</span>
                        </Link>
                    </div>

                </div>
                {/* menu section */}

            </div>

            <div >
                {children}
            </div>


        </>
    )
}