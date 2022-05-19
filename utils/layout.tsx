import Layout from "../models/layout";
import { Input, Button, Select } from "../components";

const layout = (layoutJson: Layout[]) => {
  return layoutJson.map((element, index) => {
    switch (element.component) {
      case "input":
        return (
          <div key={index}>
            <Input onChange={(e: any) => element?.onChange(e)} />
          </div>
        );

      case "select":
        return (
          <div key={index}>
            <Select />
          </div>
        );

      case "button":
        return (
          <div key={index}>
            <Button />
          </div>
        );
    }
  });
};

export default layout;
