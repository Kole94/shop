import Layout from "../models/layout";
import { Input, Button, Select } from "../components";

const layout = (layoutJson: Layout[]) => {
  return layoutJson.map((element, index) => {
    switch (element.component) {
      case "input":
        return (
          <div className="layout-div" key={index}>
            <Input {...element} />
          </div>
        );

      case "select":
        return (
          <div className="layout-div" key={index}>
            <Select />
          </div>
        );

      case "button":
        return (
          <div className="layout-div" key={index}>
            <Button {...element} />
          </div>
        );
    }
  });
};

export default layout;
