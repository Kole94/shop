import Product from "../../models/product";
import layout from "../../utils/layout";
import { Col, Table } from "../../components";
const products: Product[] = [
  {
    name: "Username",
    desciption: "input",
    price: 3,
  },
  {
    name: "Username",
    desciption: "password",
    price: 10,
  },
  {
    name: "Email",
    desciption: "email",
    price: 123,
  },
  {
    name: "Login",
    desciption: "",
    price: 32,
  },
];

const Dashboard = () => {
  const layout = () => {};
  return (
    <Col>
      <Table />
      {products.map((element) => {
        return (
          <div>
            <p>{element.name}</p>
            <p>{element.desciption}</p>
            <p>{element.price}</p>
          </div>
        );
      })}
    </Col>
  );
};

export default Dashboard;
