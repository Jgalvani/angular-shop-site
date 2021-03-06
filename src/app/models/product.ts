export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  stock: number,
  category_id: number,
  image: string,
  created_at: Date,
}
