import GameOffers from "../gameCommponets/game-offers"

export default function SpecialOffers() {
    return (
        <main className="blue-bg w-full h-[80dvh] sfprodisplay">
            <div className="h-[20%] flex flex-col items-center justify-end">
                <p className="my-2 text-[#f5f5f5] opacity-90">For You</p>
                <p className="font-medium tracking-wide text-2xl mb-3 text-white">Top Trending</p>
            </div>

            <div className="h-[65%] my-6 overflow-x-scroll scrollbar-hide">
                <div className="flex flex-nowrap ml-20 h-full w-full gap-6">

                    <GameOffers></GameOffers>
                    <GameOffers></GameOffers>
                    <GameOffers></GameOffers>
                    <GameOffers></GameOffers>
                    <GameOffers></GameOffers>
                    <GameOffers></GameOffers>

                </div>
            </div>
        </main>
    )
}