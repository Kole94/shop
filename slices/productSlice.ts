import Product from "../models/product";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    {
      key: 1,
      name: "string",
      description: "string",
      price: 100,
      comments: ["string", "string", "string", "string"],
      id: "string",
    },
    {
      key: 2,
      name: "string1",
      description: "string",
      price: 100,
      comments: ["string", "string", "string", "string"],
      id: "string",
    },
    {
      key: 3,
      name: "string",
      description: "string",
      price: 100,
      comments: ["string", "string", "string", "string"],
      id: "string2",
    },
  ],
};
const user = useSelector((state: any) => state.authSlice.user);

export const productSlice = createSlice({
  name: "prduct",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let product: Product = {
        key: action.payload.key,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        comments: [],
        id: "4",
      };
      return {
        ...state,
        products: [...state.products, product],
      };
    },
    addComment: (state, action) => {
      const product = state.products.find(
        (element: Product) => element.id == action.payload.id
      );
      if (product) {
        debugger;
        return {
          ...state,
          products: [...state.products, product],
        };
      } else {
        return { ...state };
      }
    },
    deleteProduct: (state, action) => {
      if (user.isAdmin) {
        return {
          ...state,
          products: state.products.filter((e) => e.id == action.payload.id),
        };
      } else {
        return { ...state };
      }
    },
  },
});

export const { addProduct, addComment, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
