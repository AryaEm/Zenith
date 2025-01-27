import lockdown from "../../../public/image/lockdown-protocol.jpg"

export default function SpecialOffers() {
    const trendingGames = [
        {
            id: 1,
            title: "Delta Force",
            description: "FPS, Massively Multiplayer, Free to Play, Adventure",
            rank: "#01",
            image: { lockdown },
            price: "Free",
        },
        {
            id: 2,
            title: "Marvel Rivals",
            description: "Third-Person Shooter, Moba, Free to Play, Adventure",
            rank: "#02",
            image: "path/to/marvel-rivals-image",
            price: "Free",
        },
        {
            id: 3,
            title: "Genshin Impact",
            description: "Adventure, Story, Roleplay, Waifuable jlr",
            rank: "#03",
            image: "path/to/genshin-impact-image",
            price: "Free",
        },
        {
            id: 4,
            title: "Genshin ",
            description: "Adventure, Story, Roleplay, Waifuable jlr",
            rank: "#04",
            image: "path/to/genshin-impact-image",
            price: "Free",
        },
        {
            id: 5,
            title: "Genshin Impact",
            description: "Adventure, Story, Roleplay, Waifuable jlr",
            rank: "#05",
            image: "path/to/genshin-impact-image",
            price: "Free",
        },
    ];

    return (
        <main className="blue-bg w-full h-[80dvh] sfprodisplay">
            <div className="h-[20%] flex flex-col items-center justify-end">
                <p className="my-2 text-[#f5f5f5] opacity-90">For You</p>
                <p className="font-medium tracking-wide text-2xl mb-3 text-white">Top Trending</p>
            </div>

            <div className="h-[50%] w-full mt-16 border border-black gap-6 overflow-x-scroll">
                <div className="h-full w-max gap-6 flex pl-20 ">
                    {trendingGames.map((game) => (
                        <div key={game.id} className="bg-white relative rounded-xl shadow-lg flex flex-col justify-between w-[380px] h-full">
                            <div className="w-full h-[60%] rounded-t-xl bg-emerald-900"></div>
                            <div className="w-full h-[45%] absolute bottom-0 rounded-xl bg-white p-3">
                                <div className="h-[65%] w-full flex sfprodisplay">
                                    <div className="w-[65%]">
                                        <p className="font-semibold mb-2 text-lg">{game.title}</p>
                                        <p className="font-normal text-base text-black leading-5 text-opacity-60">{game.description}</p>
                                    </div>
                                    <p className="w-[35%] h-fu-full flex items-center justify-center font-semibold text-3xl text-[#007AFF]">
                                        {game.rank}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}