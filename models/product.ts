export default interface Product {
  key: number;
  name: string;
  description: string;
  price: number;
  comments?: string[];
  id: string;
}
