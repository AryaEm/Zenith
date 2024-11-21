import Game from "../assets/AaAAAaa (1).svg"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="absolute overflow-hidden box-border h-full left-0 flex justify-center w-full">
            <div className="h-fit sm:leading-5 xl:leading-[420px] w-fit absolute top-32 xl:top-0">
                <h1 className="text-white broadmen text-[150px] xl:text-[360px]">Z<span className="textStroke text-transparent text-[160px] xl:text-[420px]">e</span><span className="textStroke text-transparent text-[160px] xl:text-[420px]">n</span>ith</h1>
            </div>
            <Image src={Game} alt="" className="h-[500px] xl:h-[680px] absolute bottom-36 xl:-bottom-20 w-fit" />
            <div className="h-fit w-[90%] xl:w-[38%] rounded-2xl bg-gray-950 bg-opacity-40 backdrop absolute bottom-36 xl:bottom-16">
                <h1 className="text-[12px] xl:text-[14px] p-6 text-center text-white">
                    OUR WEBSITE OFFERS A UNIQUE EXPERIENCE OF GAME SELECTION BASED ON YOUR PERSONAL TASTES AND PREFERENCES. WHETHER YOU'RE A PASSIONATE GAMER OR A
                    NEWCOMER, ON GAMEFORGE, YOU'LL FIND ALL AVAILABLE GAMES READY FOR IMMEDIATE IMMERSION
                </h1>
            </div>
        </div>
    )
}