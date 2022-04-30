import { Table, Tag, Space } from "antd";
import Product from "../../models/product";
import data from "../../public/data";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: any, index: any) => {
      //   debugger;
      return <a href={`/product/${index.id}`}>{text}</a>;
    },
  },
  {
    title: "Desciption",
    dataIndex: "desciption",
    key: "desciption",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

export default () => <Table columns={columns} dataSource={data} />;
