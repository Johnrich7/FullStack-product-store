import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const PRODUCTURL = "http://localhost:3000/api/products";

const CreatePage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [productData, setProductData] = useState<Product>({
    _id: "",
    name: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    (async () => {
      if (!id) {
        return;
      }
      try {
        const response = await axios.get(`${PRODUCTURL}/${id}`);
        setProductData(response.data);
      } catch (error) {
        console.error("Error in Fetching Products:", error);
      }
    })();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (id) {
        await axios.put(`${PRODUCTURL}/edit/${id}`, productData);
        navigate("/");
      } else {
        await axios.post(`${PRODUCTURL}/add`, productData);
        navigate("/");
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <div className="container m-auto max-w-lg mt-5">
      <h1 className="text-2xl font-bold">{id ? "Edit" : "Create"}</h1>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-4">
          <label className="block text-gray-700">Product Name</label>
          <input
            name="name"
            value={productData.name || ""}
            onChange={handleChange}
            placeholder="Product Name"
            className="border p-2 rounded w-full"
            required
            type="text"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            name="price"
            value={productData.price || 0}
            onChange={handleChange}
            placeholder="Price"
            className="border p-2 rounded w-full"
            min={0}
            required
            type="text"
          />
        </div>
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            name="image"
            value={productData.image || ""}
            placeholder="Image URL"
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
            type="text"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white mt-4 px-4 py-2 rounded"
        >
          {id ? "update" : "create"} product
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
