export interface Product {
  name: string,
  amount: string,
}

export interface CreatedProduct extends Product{
  id?: number;
}