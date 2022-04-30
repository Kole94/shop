import Layout from "../../utils/layout";
import layout from "../../utils/layout";

import { Button, Col } from "../../components";
const layoutJson: any = [
  {
    name: "name",
    type: "input",
    component: "input",
  },
  {
    name: "description",
    type: "input",
    component: "input",
  },
  {
    name: "price",
    type: "number",
    component: "button",
  },
];

const Addproduct = () => {
  return <Col>{layout(layoutJson)}</Col>;
};

export default Addproduct;
