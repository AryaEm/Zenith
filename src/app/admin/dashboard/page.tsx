import SidebarAdmin from "@/components/adminDashboard/sidebar"
import AdminContent from "@/components/adminDashboard/admin-content"

export default function DashboardAdmin() {
    return (
        <>
            <main className="h-dvh w-full bg-[#282A37] flex">
                <SidebarAdmin></SidebarAdmin>
                <AdminContent></AdminContent>
            </main>
        </>
    )
}