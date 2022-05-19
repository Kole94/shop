import Layout from "../../models/layout";
import layout from "../../utils/layout";
import { Col, Input, Button, Select, Form } from "../../components";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const isValidEmail = (email: any) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  const layoutJson: any = [
    {
      name: "Username",
      type: "input",
      component: "input",
    },
    {
      name: "Username",
      type: "password",
      component: "input",
    },
    {
      name: "Email",
      type: "email",
      component: "input",
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
    {
      name: "Name",
      type: "input",
      component: "input",
    },
    {
      name: "Lastname",
      type: "password",
      component: "input",
    },
    {
      name: "Address",
      type: "input",
      component: "input",
    },
    {
      name: "Phone",
      type: "password",
      component: "input",
    },
    {
      name: "UserType",
      type: "select",
      component: "select",
      options: ["kupac", "prodavac"],
    },
    {
      name: "Login",
      type: "",
      component: "button",
    },
  ];
  console.log(errors);
  return (
    <Col>
      <form onSubmit={handleSubmit(onSubmit)}>
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

            case "select":
              return (
                <div key={index}>
                  <select
                    // option={element.options}
                    // {...(register(`${element.name}`), { required: true })}

                    {...register(`${element.name}`, {
                      required: "molimo vas da popunite polje",
                    })}
                  >
                    {/* {element.options.map((e: any, index: number) => (
                      <option key={index} value={e}>
                        {e}
                      </option>
                    ))} */}
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                  {errors[`${element.name}`] && (
                    <span>{errors[`${element.name}`].message}</span>
                  )}
                </div>
              );

            case "button":
              return (
                <div key={index}>
                  <input type="submit" onClick={() => console.log(errors)} />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </div>
              );
          }
        })}
      </form>
    </Col>
  );
};

export default Register;
