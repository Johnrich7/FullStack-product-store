import React from 'react'
import ProductCard from "./ProductCard";
import { Product } from "./CreatePage";

type ProductListProps = {
  products: Product[];
  deleteProduct: (id: string) => void;
  handleEdit: (id: string) => void
}

const ProductList: React.FC<ProductListProps> = ({ products, deleteProduct, handleEdit}) => {
  return (
    <div className='grid grid-cols-4 gap-4 mt-5'>
      {products.map((product, index) => (
        <ProductCard
          key={product._id}
          product={product || index}
          deleteProduct={deleteProduct}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  )
}

export default ProductList