import { ProductProvider } from "contexts/Product/Product";
import React from "react";
import ProductList from "./ProductList";

export default function PageProduct() {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
}
