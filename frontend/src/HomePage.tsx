import{ useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Product } from "./CreatePage";
import ProductList from "./ProductList";
import axios from 'axios';

const PRODUCT_URL = 'http://localhost:3000/api/products';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(PRODUCT_URL)
        setProducts(response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }
    fetchProducts()
  }, [])

  const deleteProduct = async (id: string) => {
    try {
      await axios.delete(`${PRODUCT_URL}/delete/${id}`)
      setProducts(products.filter(product => product._id !== id))
    } catch (error) {
      console.error('Error in deleting product:', error)
    }
  }

  const handleAdd = () => {
    navigate('/create')
  }


  return (
    <div className="container mt-5 flex flex-col">
    <h1 className="text-2xl font-bold text-center">Products</h1>
    {products.length > 0 ? (
      <ProductList products={products} deleteProduct={deleteProduct} handleEdit={handleAdd} />
    ) : (
      <div className="mt-5 text-center">
        <p className="text-lg text-gray-500">No products available</p>
      </div>
    )}
      <button
        onClick={handleAdd}
        className="mt-24 mx-auto text-white bg-blue-500 max-w-32 px-3 py-2 rounded">
        create product
    </button>
  </div>
  )
}

export default HomePage