export default function GameCategory() {
    return (
        <main className="h-dvh w-full bg-white flex items-end justify-center mb-14">
            <div className="w-[70%] h-4/5 ">
                <div className="w-full h-[15%] flex flex-col items-center sfprodisplay">
                    <p className="text-[#252525] opacity-60 mb-2">Catalog</p>
                    <p className="font-medium text-2xl">Game Category</p>
                </div>

                <div className="h-3/4 w-full grid grid-cols-3 gap-4 p-4">
                    <div className="border cursor-pointer text-xl rounded game-category-shadow flex items-center justify-center text-blue-500 font-medium">Action</div>
                    <div className="border cursor-pointer text-xl rounded game-category-shadow flex items-center justify-center text-blue-500 font-medium">Survival</div>
                    <div className="border cursor-pointer text-xl rounded game-category-shadow flex items-center justify-center text-blue-500 font-medium">Horror</div>
                    <div className="border cursor-pointer text-xl rounded game-category-shadow flex items-center justify-center text-blue-500 font-medium">Anime</div>
                    <div className="border cursor-pointer text-xl rounded game-category-shadow flex items-center justify-center text-blue-500 font-medium">Visual Novel</div>
                    <div className="border cursor-pointer text-xl rounded game-category-shadow flex items-center justify-center text-blue-500 font-medium">Sport</div>
                </div>

            </div>
        </main>
    )
}