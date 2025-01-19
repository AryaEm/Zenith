"use client"
import { ReactNode } from "react"
import Navbar from "./navbar"

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

export default function ManagerTemplate({ children, id, title, menuList }: ManagerProp) {
    
    return (
        <div className="w-full min-h-dvh bg-[#fcfcfc]">
            <Navbar menuList={menuList} title={title} id={id}>
                {children}
            </Navbar>
        </div>
    )
}
