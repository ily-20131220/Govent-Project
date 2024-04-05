import { result } from 'lodash'
import React, { createContext, useState, useContext, useEffect } from 'react'
//建立context
const ProductsContext = createContext()
export function ProductsProvider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      fetch('http://localhost:3005/api/events')
        .then((res) => res.json())
        .then((text) => setData(text))
    }
    getProduct()
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它

export const useProducts = () => useContext(ProductsContext)
