import { DefaultClient, Client } from "./Client";
import { DefaultOrderItem, OrderItem } from "./OrderItem";

interface Order {
    id: number;
    client: Client;
    items: OrderItem[];
    totalAmount: number;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const DefaultOrder: Order = {
    id: 0,
    client: DefaultClient,
    items: [DefaultOrderItem],
    totalAmount: 0,
    status: "",
  };

export { DefaultOrder };
export type { Order };