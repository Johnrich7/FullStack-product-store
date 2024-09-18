import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import { Product } from './pages/CreatePage'; // Import Product component from CreatePage

type AddProduct = (product: Product) => void;
type UpdateProduct = (updatedProduct: Product) => void;
type DeleteProduct = (productId: string) => void

function App() {
  const [products, setProducts] = useState<Product[]>([])

  const addProduct: AddProduct = (product) => {
    setProducts([...products, {...product}])
  }
  const updateProduct: UpdateProduct = (updatedProduct) => {
    setProducts(products.map((p) => p.id === updatedProduct.id ? updatedProduct : p))
  }
  const deleteProduct: DeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }
  return (
    <div className="mx-auto">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage products={products} deleteProduct={deleteProduct} />} />
          <Route path="/create" element={<CreatePage addProduct={addProduct} products={products} updateProduct={updateProduct}/>} />
          <Route path="/edit/:id" element={<CreatePage addProduct={addProduct} products={products}  updateProduct={updateProduct} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
