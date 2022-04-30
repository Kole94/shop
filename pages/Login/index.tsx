import Layout from "../../utils/layout";
import layout from "../../utils/layout";

import { Button, Col } from "../../components";
const layoutJson: any = [
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
    name: "Login",
    type: "",
    component: "button",
  },
];

const Login = () => {
  return <Col>{layout(layoutJson)}</Col>;
};

export default Login;
