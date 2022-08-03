import { Button } from "../../components";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Input, Row, Col } from "../../components";
import data from "../../public/data";
import Image from "next/image";
import { Input as AntInput } from "antd";
import product from "../../models/product";
const Product = () => {
  const [comment, setComment] = useState("dsadsadsa");
  const router = useRouter();
  const { index } = router.query;
  const selectedData: product[] = useSelector((store: any) => {
    return store.data.product;
  });
  const [product, setProduct] = useState({});

  // const isLogedIn = useSelector((store: any) => {
  //   return store.logedIn;
  // });
  const { TextArea } = AntInput;

  return (
    <Row>
      {/* {selectedData
        .filter((item: any, index: any) => item.id == router.query.index)
        .map((item: any, index: any) => {
          return (
            <Col className="login">
              <h1 className="ml-4">{item.name}</h1>
              <Image
                src={`/images/${item.img}.jpeg`}
                width={800}
                height={400}
              />
              <Row className="mr-4 ml-4">
                <Col span={18}>
                  <h2>O proizvodu</h2>
                  <p>{item.description}</p>
                </Col>
                {isLogedIn.loginIn ? (
                  <Col span={6}>
                    <Button
                      name="Kupi"
                      onClick={(e: any) => {
                        e.preventDefault();
                        alert(`Kupili ste proizvod ${item.name}`);
                      }}
                    />
                  </Col>
                ) : null}
                <h3>Sstavite komentar</h3>
                <TextArea
                  className="comment"
                  onChange={(e: any) => setComment(e.target.value)}
                />
                <h2>Komentari</h2>
                {item.comments?.map((comment: string, index: number) => {
                  return <p key={index}>{comment}</p>;
                })}
              </Row>
            </Col>
          );
        })} */}
    </Row>
  );
};

export default Product;
