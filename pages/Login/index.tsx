import Layout from "../../utils/layout";
import layout from "../../utils/layout";
import { useForm } from "react-hook-form";
import { Col, Input, Button, Select, Form } from "../../components";
import { store } from "../../redux/store";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { authSlice } from "../../slices/authSlice";

const layoutJson: any = [
  {
    name: "username",
    type: "input",
    component: "input",
    className: "mt-2 login-input",
  },
  {
    name: "password",
    type: "password",
    component: "input",
    className: "mt-2 login-input",
  },
  {
    name: "Login",
    type: "submit",
    component: "button",
    className: "mt-2 login-input login-btn",
  },
];

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(
      authSlice.actions.login({
        username: data.username,
        password: data.password,
      })
    );
  };
  const isLogin = useSelector((state: any) => state.authSlice.user);
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Dobro došli!</h1>
        <Col className="">
          {layoutJson.map((element: any, index: any) => {
            switch (element.component) {
              case "input":
                return (
                  <div className="layout-div" key={index}>
                    <input
                      {...register(`${element.name}`, {
                        required: "molimo vas da popunite polje",
                        pattern: {
                          value: element.pattern,
                          message: "neispravna email adresa",
                        },
                      })}
                      {...element}
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
                    <input {...element} />
                  </div>
                );
            }
          })}
        </Col>
      </form>
    </div>
  );
};

export default Login;
