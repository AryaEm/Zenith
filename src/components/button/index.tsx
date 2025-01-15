import { ReactNode } from "react"
import Link from "next/link"

type Props = {
    children: ReactNode
    type: "button" | "submit" | "reset",
    className?: string
}

export const GetStartedBtn = ({ children, type, className }: Props) => {
    return (
        <Link href={''} className={`text-sm bg-[#007AFF] text-white rounded-lg py-2 px-4 hover:bg-[#007AFF] font-medium ${className}`}
            type={type}>
            {children}
        </Link>
    )
}

export const AddToCartBtn = ({ children, type, className }: Props) => {
    return (
        <Link href={''} className={`text-sm bg-[#007AFF] text-white rounded-lg py-2 px-5 hover:bg-[#007AFF] font-normal ${className}`}
            type={type}>
            {children}
        </Link>
    )
}