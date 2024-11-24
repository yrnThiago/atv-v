import SideBarLayout from "@/components/SideBar";
import ServicesTable from "@/components/ServicesTable";

const ServicesPage = () => {
    return (
        <div className="flex h-screen bg-gray-100">

            <SideBarLayout />

            <main className="flex-1 p-8 overflow-auto">
                <ServicesTable />
            </main>

        </div>
    );
};

export default ServicesPage;