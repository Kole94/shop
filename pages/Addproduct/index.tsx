import layout from "../../utils/layout";
import { store } from "../../redux/store";

import { Button, Col } from "../../components";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Addproduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

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
    {
      name: "Add",
      type: "",
      component: "button",
    },
  ];
  const add = () => {
    // console.log(store.getState());
    // const size = store.getState()?.product.length;
    store.dispatch({
      type: "addProduct",
      payload: {
        description: description,
        name: name,
        price: price,
        // key: size,
      },
    });
  };
  return (
    <Col>
      {layoutJson.map((element: any, index: any) => {
        switch (element.component) {
          case "input":
            return (
              <Col key={index}>
                <input
                  {...register(`${element.name}`, {
                    required: "molimo vas da popunite polje",
                    pattern: {
                      value: element.pattern,
                      message: "neispravna email adresa",
                    },
                  })}
                />
                {errors[`${element.name}`] && (
                  <span>{errors[`${element.name}`].message}</span>
                )}
              </Col>
            );
          case "button":
            return (
              <div key={index}>
                <input
                  type="submit"
                  value={element.name}
                  onClick={() => console.log(errors)}
                />
                {errors.exampleRequired && <span>This field is required</span>}
              </div>
            );
        }
      })}
    </Col>
  );
};

export default Addproduct;
