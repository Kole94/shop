export default interface User {
  password: string;
  phone: string;
  address: string;
  email: string;
  name: string;
  lastname: string;
  isAdmin?: boolean;
  bought?: string[];
}
