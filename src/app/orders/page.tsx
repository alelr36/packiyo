import { fetchOrders } from "@/lib/actions/orders";
import Link from "next/link";
import { OrdersTable } from "./OrdersTable";
import { columns } from "./OrdersTable/columns";

const OrdersPage = async () => {
    const orders = await fetchOrders();
    return (
        <div>
            <section className="flex flex-col">
                <OrdersTable columns={columns} data={orders} />
            </section>
        </div>
    );
};

export default OrdersPage;