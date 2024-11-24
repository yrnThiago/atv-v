import SideBarLayout from "@/components/SideBar";
import ClientsTable from "@/components/ClientsTable";

const ClientsPage = () => {
    return (
        <div className="flex h-screen bg-gray-100">

            <SideBarLayout />

            <main className="flex-1 p-8 overflow-auto">
                <ClientsTable />
            </main>

        </div>
    );
};

export default ClientsPage;