import { GET_USERS, USERS_ERROR } from "../types";

const initialState = {
  users: [],
  loading: true,
};

export default function (state: any, action: any) {
  switch (action.type) {
    case "addProduct":
      let arr = state.product;
      arr.push({
        description: action.payload.description,
        name: action.payload.name,
        price: action.payload.price,
        key: action.payload.key,
      });
      return { ...state, data: arr };
    default:
      return {
        ...state,
      };
  }
}
