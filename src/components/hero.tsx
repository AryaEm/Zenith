import Game from "../assets/AaAAAaa (1).svg"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="">
            <div className="absolute overflow-hidden box-border h-full left-0 flex justify-center w-full">
                <div className="h-fit leading-[420px] w-fit absolute">
                    <h1 className="broadmen text-[360px] ">Z<span className="textStroke text-transparent text-[420px]">e</span><span className="textStroke text-transparent text-[420px]">n</span>ith</h1>
                </div>  
                <Image src={Game} alt="" className="h-[680px] absolute -bottom-20 w-fit" />
            </div>
        </div>
    )
}