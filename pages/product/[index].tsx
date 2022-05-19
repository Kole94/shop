import { Button } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { Input } from "../../components";
import data from "../../public/data";

const Product = () => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  //   const { pid } = router.query;

  return (
    <>
      <p>Product: {router.query.index}</p>
      <p>add comment</p>
      <Input onChange={(e: any) => setComment(e.target.value)} />
      <Button
        onClick={() => {
          let product = data[Number(router.query.index)];
          data.push(comment);
        }}
      />
    </>
  );
};

export default Product;
