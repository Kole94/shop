import Layout from "../../models/layout";
import layout from "../../utils/layout";
import { Col } from "../../components";
const layoutJson: Layout[] = [
  {
    name: "Username",
    type: "input",
    component: "input",
  },
  {
    name: "Username",
    type: "password",
    component: "input",
  },
  {
    name: "Email",
    type: "email",
    component: "input",
  },
  {
    name: "Login",
    type: "",
    component: "button",
  },
];

const Register = () => {
  return <Col>{layout(layoutJson)}</Col>;
};

export default Register;
