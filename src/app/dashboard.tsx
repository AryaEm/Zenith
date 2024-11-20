import Image from "next/image";
import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero"

export default function Home() {
    return (
        <main className="bgPrimaryColor h-dvh flex">
            <Hero></Hero>
            <Sidebar></Sidebar>
        </main>
    );
}
