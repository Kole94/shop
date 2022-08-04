import Product from "../models/product";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface ProductState {
  products: Product[];
  product?: Product;
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
// const user = useSelector((state: any) => state.authSlice.user);

export const productSlice = createSlice({
  name: "prduct",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let product: Product = {
        key: 5,
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
        (element: Product) => element.id == action.payload.product.id
      );
      const products: Product[] = state.products.filter(
        (element: Product) => element.id == action.payload.product.id
      );
      // let newProduct = product;
      // newProduct?.comments?.push(action.payload.comment);
      // product?.comments?.push(action.payload.comment);
      // debugger;
      if (product) {
        debugger;
        return {
          ...state,
          products: [...products, action.payload.product],
          product: action.payload.product,
        };
      } else {
        return { ...state };
      }
    },
    getProduct: (state, action) => {
      const product = state.products.find(
        (element: Product) => element.id == action.payload.id
      );
      return {
        ...state,
        product: product,
      };
    },
    deleteProduct: (state, action) => {
      if (action.payload.isAdmin) {
        return {
          ...state,
          products: [
            ...state.products.filter((e) => e.id == action.payload.id),
          ],
        };
      } else {
        return { ...state };
      }
    },
  },
});

export const { addProduct, addComment, deleteProduct, getProduct } =
  productSlice.actions;

export default productSlice.reducer;
