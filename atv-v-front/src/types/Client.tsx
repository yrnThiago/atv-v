interface Client {
    id: number;
    name: string;
    socialName: string;
    cpf: string;
    email: string;
    contactNumbers: string[];
    productOrders: [];
    serviceOrders: [];
    pets: []; 
    totalSpent?: number;
    totalServicesBought?: number;
    totalProductsBought?: number;
}

const DefaultClient: Client = {
    id: 0,
    name: "",
    socialName: "",
    cpf: "",
    email: "",
    contactNumbers: [],
    productOrders: [],
    serviceOrders: [],
    pets: [],
  };

export { DefaultClient };
export type { Client };