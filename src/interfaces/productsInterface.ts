export interface NewProduct {
  name: string,
  amount: string,
}

export interface CreatedProduct extends NewProduct{
  id: number;
}

export interface ListProducts{
  id: number,
  name: string,
  amount: string,
  orderId: number;
}