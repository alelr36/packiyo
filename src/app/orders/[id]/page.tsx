import { Label } from "@/components/ui/label";
import { fetchOrder } from "@/lib/actions/orders";

type Props = {
    params: {
        id: string;
    };
};

const OrderPage = async ({ params }: Props) => {
    const id = params.id;
    const order = await fetchOrder(id);

    return (
        <div>
            {Object.entries(order.attributes).map(([key, value]) => <div key={key}><Label>{key}</Label>: <Label className="font-light">{value as string}</Label></div>)}
        </div>
    );
};

export default OrderPage;