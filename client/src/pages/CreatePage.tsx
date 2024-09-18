import React, {useState, useEffect, FormEvent, ChangeEvent} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export interface Product {
  id: string,
  name: string,
  price: number,
  imageUrl:  string,
}

type CreatePageProps = {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
}

const CreatePage: React.FC<CreatePageProps>= ({ products, addProduct, updateProduct }) => {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const [productData, setProductData] = useState<Product>({id: '',  name: '', price: 0, imageUrl: '' })
  
  useEffect(() => {
    if (id) {
      const productToEdit = products.find(p => p.id === (id))
      if (productToEdit) {
        setProductData(productToEdit)
      }
    }
  }, [id, products])

  const handleChange = (e: ChangeEvent  <HTMLInputElement>) => {
    setProductData({...productData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (id) {
      updateProduct(productData)
    } else {
      addProduct(productData)
    }
    navigate('/')
  }


  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className=''>Product Name</label>
          <input
            name='name'
            value={productData.name}
            onChange={handleChange}
            type="text" />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            name='price'
            value={productData.price}
            onChange={handleChange}
            type="text" />
        </div>
        <div>
          <label htmlFor="">Image URL</label>
          <input
            name='imageUrl'
            value={productData.imageUrl}
            onChange={handleChange}
            type="text" />
        </div>
        <button type='submit'>
          {id ? 'update' : 'create'} Product
        </button>
      </form>
    </div>
  )
}

export default CreatePage