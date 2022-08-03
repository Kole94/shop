import Product from "../../models/product";
import layout from "../../utils/layout";
import { Row, Input, Col, Button, Item } from "..";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { store } from "../../redux/store";
import Link from "next/link";
import { useState } from "react";
import { login } from "../../slices/authSlice";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  // const selectedData = useSelector((store: any) => {
  //   return store.data.product;
  // });
  // const logedIn = useSelector((store: any) => {
  //   return store.logedIn.userLogedIn;
  // });
  console.log(search);
  const compare = (b: string) => {
    const myArray = search.split("");
    const myArrayB = b.split("");

    let counter = 0;

    myArray.forEach((value: any, i: any) => {
      if (value.toUpperCase() == myArrayB[i].toUpperCase()) counter++;
    });
    if (counter == search.length) {
      return true;
    }
  };
  const dispatch = useDispatch();
  // dispatch(login);
  console.log(store.getState());
  // debugger;
  return (
    <Col className="dashboard">
      <Row className="search">
        <Input
          placeholder="Search"
          className="input-search mb-2"
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </Row>
      <Button name="sda" onClick={() => dispatch(login({}))}>
        Abc
      </Button>
      {/* {() => dispatch(login)} */}

      {/* <Row className="dash-items">
        {selectedData
          .filter((item: any, index: any) => {
            if (compare(item.name)) return item;
          })
          .map((item: any, index: any) => {
            if (search != "" || compare(item.name))
              return (
                <>
                  <Link href={`/product/${item.id}`}>
                    <div key={index} className="item mr-2 mb-2">
                      <Item key={index} item={item} />

                      {logedIn ? (
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
                </>
              );
          })}
      </Row> */}
    </Col>
  );
};

export default Dashboard;
