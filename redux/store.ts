import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducers/index";
import data from "../public/data";
import Product from "../models/product";

// initial states here
interface reduxData {
  data: Product[];
}
// const initalState: reduxData = {
//   data: [
//     {
//       desciption: "1",
//       name: "John Brown",
//       price: 32,
//       id: 0,
//     },
//     {
//       desciption: "2",
//       name: "Jim Green",
//       price: 42,
//       id: 1,
//     },
//     {
//       desciption: "3",
//       name: "Joe Black",
//       price: 32,
//       id: 2,
//     },
//   ],
// };

// middleware
const initalState = {
  data: {
    // r: 0,
    product: [
      {
        name: "John Brown",
        description: "John Brown",
        price: 32,
        key: 0,
      },
      {
        name: "Jim Green",
        description: "Jim Green",
        price: 42,
        key: 1,
      },
      {
        name: "Joe Black",
        description: "3Jim Green",
        price: 32,
        key: 2,
      },
    ],
  },
};
const middleware = [thunk];

// creating store
export const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
