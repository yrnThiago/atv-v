interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
}

const DefaultProduct: Product = {
    id: 0,
    name: "",
    category: "",
    price: 0,
    stock: 0,
  };

export { DefaultProduct };
export type { Product };