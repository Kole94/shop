import { Row as AntRow } from "antd";
const Row = (props: any) => {
  return (
    <AntRow className={`row ${props.className}`} {...props}>
      {props.children}
    </AntRow>
  );
};

export default Row;
