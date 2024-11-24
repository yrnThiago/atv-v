import { Client, DefaultClient } from "./Client";

interface Pet {
    id: number;
    name: string;
    type: string;
    race: string;
    gender: string;
    client: Client;
}

const DefaultPet: Pet = {
    id: 0,
    name: "",
    type: "",
    race: "",
    gender: "",
    client: DefaultClient
  };

export { DefaultPet };
export type { Pet };