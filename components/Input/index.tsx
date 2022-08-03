import { Input as AntInput } from "antd";
const { TextArea } = AntInput;

const Input = (props: any) => {
  return <AntInput type={props.type} placeholder={props.name} {...props} />;
};

export default Input;
