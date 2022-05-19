import Layout from "../../utils/layout";
import layout from "../../utils/layout";
import { store } from "../../redux/store";

import { Button, Col } from "../../components";
import { useState } from "react";
import Link from "next/link";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const layoutJson: any = [
    {
      name: "name",
      type: "input",
      component: "input",
      onChange: (e: any) => setName(e.target.value),
    },
    {
      name: "description",
      type: "input",
      component: "input",
      onChange: (e: any) => setDescription(e.target.value),
    },
    {
      name: "price",
      type: "number",
      component: "input",
      onChange: (e: any) => {
        setPrice(e.target.value);
      },
    },
  ];
  const add = () => {
    console.log(store.getState());
    const size = store.getState().data.product.length;
    store.dispatch({
      type: "addProduct",
      payload: {
        description: description,
        name: name,
        price: price,
        key: size,
      },
    });
  };
  return (
    <Col>
      {layout(layoutJson)}
      <Button
        onClick={() => {
          add();
          // console.log(store.getState());
        }}
      />
      <Link href={"/Dashboard"}>dashboard</Link>
    </Col>
  );
};

export default Addproduct;
