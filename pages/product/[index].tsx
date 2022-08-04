import { Button } from "../../components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "../../components";
import { Input as AntInput } from "antd";
import { productSlice } from "../../slices/productSlice";

import Product from "../../models/product";
const Product = () => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { index } = router.query;

  const dispatch = useDispatch();
  const { TextArea } = AntInput;
  useEffect(() => {
    dispatch(productSlice.actions.getProduct({ id: index }));
  }, []);
  const product = useSelector((state: any) => state.productSlice.product);
  const user = useSelector((state: any) => state.authSlice.user);
  const isAdmin = user?.isAdmin;
  return (
    <Row>
      return (
      <Col className="login">
        <h1 className="ml-4">{product?.name}</h1>
        <Row className="mr-4 ml-4">
          <Col span={18}>
            <h2>O proizvodu</h2>
            <p>{product?.description}</p>
          </Col>
          {user ? (
            <Col span={6}>
              <Button
                name="Kupi"
                onClick={(e: any) => {
                  e.preventDefault();
                  alert(`Kupili ste proizvod ${product?.name}`);
                }}
              />
            </Col>
          ) : null}
          <h3>Sastavite komentar</h3>
          <TextArea
            className="comment"
            onChange={(e: any) => setComment(e.target.value)}
          />
          <input
            type="submit"
            onClick={() => {
              let newProduct = (): Product => {
                return {
                  ...product,
                  comments: [...product.comments, comment],
                };
              };
              dispatch(
                productSlice.actions.addComment({
                  product: newProduct(),
                })
              );
            }}
          ></input>
          {isAdmin ? (
            <input
              placeholder="Delete"
              type="submit"
              onClick={() => {
                dispatch(
                  productSlice.actions.deleteProduct({
                    id: product.id,
                    isAdmin: isAdmin,
                  })
                );
              }}
            ></input>
          ) : null}
          <h2>Komentari</h2>
          {product?.comments?.map((comment: string, index: number) => {
            return <p key={index}>{comment}</p>;
          })}
        </Row>
      </Col>
      );
    </Row>
  );
};

export default Product;
