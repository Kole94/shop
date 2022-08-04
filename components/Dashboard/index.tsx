import Product from "../../models/product";
import { Row, Input, Col, Button, Item } from "..";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import Link from "next/link";
import { useState } from "react";
import { productSlice } from "../../slices/productSlice";
// import { authSlice } from "../../slices/authSlice";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const compare = (b: string) => {
    const myArray = search.split("");
    const myArrayB = b.split("");

    let counter = 0;

    myArray.forEach((value: any, i: any) => {
      const a = value;
      const b = myArrayB[i];
      if (a == b) counter++;
    });
    if (counter == search.length) {
      return true;
    }
  };
  const dispatch = useDispatch();
  const products: Product[] = useSelector(
    (state: any) => state.productSlice.products
  );
  const login: Product[] = useSelector((state: any) => state.authSlice.user);

  return (
    <Col className="dashboard">
      <Row className="search">
        <Input
          placeholder="Search"
          className="input-search mb-2"
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </Row>
      <Row className="dash-items">
        {products
          .filter((item: any, index: any) => {
            if (compare(item.name)) return item;
          })
          .map((item: any, index: any) => {
            if (search != "" || compare(item.name))
              return (
                <div key={index}>
                  <Link href={`/product/${encodeURIComponent(item.id)}`}>
                    <div
                      key={index}
                      className="item mr-2 mb-2"
                      // onClick={() =>
                      //   dispatch(productSlice.actions.getProduct({ id: item.id }))
                      // }
                    >
                      <Item key={index} item={item} />
                      {login ? (
                        <Button
                          onClick={store.dispatch({
                            type: "buy",
                            payload: item.name,
                          })}
                          name={"KUPI"}
                        />
                      ) : null}
                    </div>
                  </Link>
                </div>
              );
          })}
      </Row>
    </Col>
  );
};

export default Dashboard;
