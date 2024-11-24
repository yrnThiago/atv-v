import SideBarLayout from "@/components/SideBar";
import PetsTable from "@/components/PetsTable";

const PetsPage = () => {
    return (
        <div className="flex h-screen bg-gray-100">

            <SideBarLayout />

            <main className="flex-1 p-8 overflow-auto">
                <PetsTable />
            </main>

        </div>
    );
};

export default PetsPage;