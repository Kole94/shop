import { Select as AntSelect } from "antd";
import styles from "./select.module.css";
const { Option } = AntSelect;

function Select(props: any) {
  return (
    <>
      <AntSelect {...props}>
        {props.option?.map((element: any, index: number) => {
          return (
            <Option key={index} className="dsadsa" value={element}>
              {element}
            </Option>
          );
        })}
      </AntSelect>
    </>
  );
}

export default Select;
