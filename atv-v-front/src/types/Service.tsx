interface Service {
    id: number;
    name: string;
    duration: string;
    price: number;
}

const DefaultService: Service = {
    id: 0,
    name: "",
    duration: "",
    price: 0,
  };

export { DefaultService };
export type { Service };