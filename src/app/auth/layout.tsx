import React from "react"
import { ToastContainer } from "react-toastify"

export const metadata = {
    title: 'Login | Zenith',
    description: 'Praktikum SMK Telkom Malang'
}

type PropsLayout = {
    children: React.ReactNode
}

const RootLayout = ({ children }: PropsLayout) => {
    return (
        <div>
            {children}
            <ToastContainer containerId={`toastLogin`} />
            <ToastContainer containerId={`toastRegister`} />
        </div>
    )
}

export default RootLayout