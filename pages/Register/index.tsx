import Layout from "../../models/layout";
import layout from "../../utils/layout";
import { Col, Input, Button, Select, Form } from "../../components";
import { useForm } from "react-hook-form";
import { store } from "../../redux/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { authSlice } from "../../slices/authSlice";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const layoutJson: any = [
    {
      name: "Name",
      type: "input",
      component: "input",
      className: "mt-2 login-input",
    },
    {
      name: "Password",
      type: "password",
      component: "input",
      className: "mt-2 login-input",
    },
    {
      name: "Email",
      type: "email",
      component: "input",
      className: "mt-2 login-input",
      pattern:
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },

    {
      name: "Lastname",
      type: "password",
      component: "input",
      className: "mt-2 login-input",
    },
    {
      name: "Address",
      type: "input",
      component: "input",
      className: "mt-2 login-input",
    },
    {
      name: "Phone",
      type: "password",
      component: "input",
      className: "mt-2 login-input",
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
      className: "mt-2 login-input login-btn",
    },
  ];

  const isOn = useSelector((state: any) => state.authSlice.register);
  console.log(isOn);

  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    dispatch(
      authSlice.actions.register({
        username: data.Username,
        password: data.Password,
        phone: data.Phone,
        address: data.Address,
        email: data.Email,
        name: data.Name,
        lastname: data.Lastname,
      })
    );
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Col>
          {layoutJson.map((element: any, index: any) => {
            switch (element.component) {
              case "input":
                return (
                  <div className="layout-div" key={index}>
                    <input
                      {...element}
                      placeholder={element.name}
                      className={`${element.className} ${
                        errors[`${element.name}`] ? "red-border" : null
                      }`}
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
                  </div>
                );
              case "button":
                return (
                  <div className="layout-div" key={index}>
                    <input
                      {...element}
                      type="submit"
                      // onClick={() => {
                      // dispatch(authSlice.actions.register({}));
                      // }}
                    />
                    {errors.exampleRequired && (
                      <span className="ml-1 red">This field is required</span>
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

export default Register;
