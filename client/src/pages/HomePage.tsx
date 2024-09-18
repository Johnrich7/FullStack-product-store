import React from "react";
import { Link } from "react-router-dom";
import { Product } from "./CreatePage";
import ProductList from "../ProductList";

type DeleteProduct = (productId: string) => void;

const HomePage: React.FC<{
  products: Product[];
  deleteProduct: DeleteProduct;
}> = ({ products, deleteProduct }) => {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold">Products</h1>
      {products.length > 0 ? (
        <ProductList products={products} deleteProduct={deleteProduct} />
      ) : (
        <div className="mt-5 text-center">
          <p className="text-lg text-gray-500">No products available</p>
        </div>
      )}
      <Link
        to="/create"
        className="mt-4 inline-block text-white bg-blue-500 px-4 py-2 rounded"
      >
        Create Product
      </Link>
    </div>
  );
};

export default HomePage;
