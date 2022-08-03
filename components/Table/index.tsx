import { Table as AntTable, Tag, Space } from "antd";
import Link from "next/link";
import Product from "../../models/product";
import data from "../../public/data";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: any, index: any) => {
      return <Link href={`/product/${index.key}`}>{text}</Link>;
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

const Table = (props: any) => {
  return (
    <AntTable
      {...props}
      columns={columns}
      dataSource={props.data}
      pagination={false}
      scroll={{ x: 2000, y: 500 }}
      bordered
    />
  );
};
export default Table;
