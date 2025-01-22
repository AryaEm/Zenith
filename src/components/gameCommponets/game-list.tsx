import Link from "next/link"
import Image from "next/image"
import miside from "../../../public/image/misidecover.jpg"

export default function GameList() {
    return (
        <>
            <div className="h-fit w-full flex justify-center primary">
                <div className="w-[70%] h-full relative z-[1] my-4">
                    <div className="flex w-full h-20 gap-7 items-center justify-start my-7">
                        <Link href={''} className="py-2 px-7 text-white text-opacity-60 border border-white border-opacity-40 rounded-full font-medium hover:bg-[#007AFF] hover:text-white transition-all duration-300 hover:border-transparent">New Trending</Link>
                        <Link href={''} className="py-2 px-7 text-white text-opacity-60 border border-white border-opacity-40 rounded-full font-medium hover:bg-[#007AFF] hover:text-white transition-all duration-300 hover:border-transparent">Best Seller</Link>
                        <Link href={''} className="py-2 px-7 text-white text-opacity-60 border border-white border-opacity-40 rounded-full font-medium hover:bg-[#007AFF] hover:text-white transition-all duration-300 hover:border-transparent">Upcoming</Link>
                        <Link href={''} className="py-2 px-7 text-white text-opacity-60 border border-white border-opacity-40 rounded-full font-medium hover:bg-[#007AFF] hover:text-white transition-all duration-300 hover:border-transparent">Best Offer</Link>
                        <Link href={''} className="py-2 px-7 text-white text-opacity-60 border border-white border-opacity-40 rounded-full font-medium hover:bg-[#007AFF] hover:text-white transition-all duration-300 hover:border-transparent">Tranding Free</Link>
                    </div>

                    <div className="w-full h-36 gamelistshadow my-5 rounded-xl flex bg-white">
                        <div className="w-1/4 rounded-">
                            <Image src={miside} alt="miside" className="w-full h-full object-cover rounded-xl"></Image>
                        </div>
                        <div className="flex w-3/4 h-full px-5 justify-between items-center">
                            <div className="w-1/2 h-3/4 flex flex-col">
                                <p className="text-xl font-medium">Miside</p>
                                <p className="text-lg my-px font-normal text-[#252525] text-opacity-60">Anime, Horror, Diving World, First-Person</p>
                            </div>
                            <div className="w-1/2 h-3/4 flex flex-col items-end justify-between">
                                <p className="text-2xl">Rp 75 000</p>
                                <p className="text-base text-[#252525] text-opacity-60">10 Jan 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}