import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "./pages/CreatePage";

type DeleteProduct = (productId: string) => void;

const ProductList: React.FC<{
  products: Product[];
  deleteProduct: DeleteProduct;
}> = ({ products, deleteProduct }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
