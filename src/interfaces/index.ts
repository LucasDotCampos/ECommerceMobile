export interface IProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

export interface IUserProduct {
  id: string;
  product_id: string;
  quantity: number;
  user_id: string;
  name: string;
  price: string;
  image: string;
}
