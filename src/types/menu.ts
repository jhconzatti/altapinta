export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "sandwiches" | "bebidas" | "salsas" | "acompanhamientos" | "platos";
}

export interface CartItem extends MenuItem {
  quantity: number;
}
