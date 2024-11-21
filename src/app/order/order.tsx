export default function OrderLayOut() {
    return (
        <div className="brd h-dvh w-full absolute flex flex-col items-center justify-center gap-4 py-16 xl:flex-row">
            <div className="bg-slate-950 text-white h-[50%] w-[85%] xl:w-[45%] xl:h-[95%] orderpage bg-opacity-15 rounded-2xl border-[1px] border-zinc-500 backdrop flex flex-col items-center py-6">
                <div className="brd w-[90%] h-[60%]"></div>
            </div>

            <div className="bg-slate-950 text-white h-[50%] w-[85%] xl:w-[45%] xl:h-[95%] orderpage bg-opacity-15 rounded-2xl border-[1px] border-zinc-500 backdrop"></div>
        </div>
    )
}