import WelcomeAdmin from "./welcome-admin"

export default function AdminContent() {
    return (
        <>
            <div className="h-dvh w-4/5 py-8 px-12 box-content relative">
                <WelcomeAdmin></WelcomeAdmin>

                <div className="h-full w-full border box-content"></div>

            </div>
        </>
    )
}