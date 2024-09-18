import React, { createContext, ReactNode, useState } from "react";
import {v4 as uuidv4} from 'uuid'

interface ProductContextProps {
    products: Product[];
    addProduct: (name: string, price: number, imageUrl: string) => void;
    editProduct: (id: string, name: string, price: number, imageUrl: string) => void;    
    deleteProduct: (id: string) => void
    isLoading: boolean;
}

export interface Product {
    id: string,
    name: string,
    price: number,
    imageUrl: string
    
}

export const ProductContext = createContext<ProductContextProps | undefined>(undefined)

export const ProductProvider = (props: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const addProduct = (name: string, price: number, imageUrl: string) => {
        setIsLoading(true);
        const newProduct = {
            id: uuidv4(),
            name,
            price,
            imageUrl
        }
        setProducts([...products,  newProduct]);
        setIsLoading(false)
    }

    const editProduct = (id: string, name: string, price: number, imageUrl: string) => {
        setIsLoading(true);
        setProducts(products.map(product => product.id === id ? { ...product, name, price, imageUrl } : product));
        setIsLoading(false)
    }

    const deleteProduct = (id: string) => {
        setIsLoading(true);
        setProducts(products.filter(product => product.id !== id));
        setIsLoading(false)
    }

    const value: ProductContextProps = {
        products,
        isLoading,
        addProduct,
        editProduct,
        deleteProduct
    }

    return (
        <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>
    )

}  