import layout from "../../utils/layout";
import { store } from "../../redux/store";

import { Button, Col } from "../../components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { productSlice } from "../../slices/productSlice";
import { useDispatch } from "react-redux";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const layoutJson: any = [
    {
      name: "name",
      type: "input",
      component: "input",
      // onChange: (e: any) => setName(e.target.value),
    },
    {
      name: "description",
      type: "input",
      component: "input",
      // onChange: (e: any) => setDescription(e.target.value),
    },
    {
      name: "price",
      type: "input",
      component: "input",
      // onChange: (e: any) => {
      //   setPrice(e.target.value);
      // },
    },
    {
      name: "Add",
      type: "",
      component: "button",
    },
  ];
  const onSubmit = (data: any) => {
    dispatch(
      productSlice.actions.addProduct({
        description: data.description,
        name: data.name,
        price: data.price,
      })
    );
  };
  return (
    <div className="addproduct">
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Col>
          {layoutJson.map((element: any, index: any) => {
            switch (element.component) {
              case "input":
                return (
                  <Col key={index} className="layout-div">
                    {/* <p className="middle">{element.name}</p> */}
                    <input
                      className="login-input mt-1"
                      placeholder={element.name}
                      {...element}
                      {...register(`${element.name}`, {
                        required: "molimo vas da popunite polje",
                        pattern: {
                          value: element.pattern,
                          message: "neispravna email adresa",
                        },
                      })}
                    />
                    {errors[`${element.name}`] && (
                      <span className="ml-1 red">
                        {errors[`${element.name}`].message}
                      </span>
                    )}
                  </Col>
                );
              case "button":
                return (
                  <div key={index}>
                    <input
                      type="submit"
                      onClick={() => console.log(errors)}
                      className="login-input mt-2 pointer"
                      value={element.name}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                  </div>
                );
            }
          })}
        </Col>
      </form>
    </div>
  );
};

export default Addproduct;
