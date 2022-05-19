import Product from "../../models/product";
import layout from "../../utils/layout";
import { Col, Table, Button } from "../../components";
import { shallowEqual, useSelector } from "react-redux";
import { store } from "../../redux/store";
import Link from "next/link";

const Dashboard = () => {
  const selectedData = useSelector((store: any) => {
    // debugger;
    return store.data.product;
  });
  // debugger;
  return (
    <Col>
      <Table data={selectedData} />
    </Col>
  );
};

export default Dashboard;
