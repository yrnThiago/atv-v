import { DefaultOrder, Order } from "./Order";
import { DefaultService, Service } from "./Service";
import { DefaultProduct, Product } from "./Product";

interface OrderItem {
    id: number;
    product?: Product;
    service?: Service;
    order: Order;
    quantity: number;
    totalPrice: number;
}

const DefaultOrderItem: OrderItem = {
    id: 0,
    product: undefined,
    service: undefined,
    order: {
        id: 0,
        client: {
            id: 0,
            name: "",
            socialName: "",
            cpf: "",
            email: "",
            contactNumbers: [],
            productOrders: [],
            serviceOrders: [],
            pets: [],
          },
        items: [],
        totalAmount: 0,
        status: "",
      },
    quantity: 0,
    totalPrice: 0,
  };

export { DefaultOrderItem };
export type { OrderItem };