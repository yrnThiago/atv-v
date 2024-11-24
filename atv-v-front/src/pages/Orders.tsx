import SideBarLayout from "@/components/SideBar";
import OrdersTable from "@/components/OrdersTable";

const OrdersPage = () => {
    return (
        <div className="flex h-screen bg-gray-100">

            <SideBarLayout />

            <main className="flex-1 p-8 overflow-auto">
                <OrdersTable />
            </main>

        </div>
    );
};

export default OrdersPage;