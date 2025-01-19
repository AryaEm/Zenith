import Image from "next/image"
import inisponsor from "../../../public/image/Frame 62.svg"

export default function Sponsor() {
    return(
        <>
            <div className="h-[70dvh] w-full flex items-center justify-center">
                <Image src={inisponsor} alt=""></Image>
            </div>
        </>
    )
}