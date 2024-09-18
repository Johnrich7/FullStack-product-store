import React from 'react'
import { Product } from './pages/CreatePage'
import { Link } from 'react-router-dom';

type DeleteProduct = (productId: string) => void;

const ProductCard: React.FC<{ product: Product;  deleteProduct: DeleteProduct }> = ({ product, deleteProduct }) => {

  return (
      <div>
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <div>
              <Link to={`/edit/${product.id}`}>Edit</Link>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
    </div>
  )
}

export default ProductCard