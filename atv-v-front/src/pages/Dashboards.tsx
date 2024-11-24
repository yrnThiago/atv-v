import SideBarLayout from "@/components/SideBar";
import DashboardLayout from "@/components/DashboardLayout";

const DashboardsPage = () => {
    return (
        <div className="flex h-screen bg-gray-100">

        <SideBarLayout />

        <main className="flex-1 p-8 overflow-auto">
            <DashboardLayout />
        </main>

    </div>
    );
};

export default DashboardsPage;