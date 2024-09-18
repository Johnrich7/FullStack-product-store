import React from 'react'
import { Product } from './CreatePage'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  product: Product;
  deleteProduct: (id: string) => void;
  handleEdit: (id: string, name: string, price: number, image: string) => void;

}

const ProductCard: React.FC<ProductCardProps> = ({ product, deleteProduct, handleEdit }) => {
  return (
    <div className='border p-4 rounded-md max-w-lg mx-auto px-7'>
        <img src={product.image} alt={product.name} className='w-auto h-32 object-cover rounded-md items-center' />
        <h2 className='font-semibold'>{product.name}</h2>
        <p>{`Rs ${product.price}`}</p>
        <div className='flex justify-end space-x-2'>
            <Link to={`/edit/${product._id}`}><button onClick={() => handleEdit(product._id, product.name, product.price, product.image)} className='text-white bg-blue-500 px-4 py-2 border rounded-md'>Edit</button></Link>
            <button onClick={() => deleteProduct(product._id)} className='text-white px-4 py-2 border bg-red-600 rounded-md'>Delete</button>
        </div>
    </div>
  )
}

export default ProductCard