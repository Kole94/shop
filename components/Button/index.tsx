import { Button as AntButton } from "antd";
const Button = (props: any) => {
  return <AntButton {...props}>{props.name}</AntButton>;
};

export default Button;
