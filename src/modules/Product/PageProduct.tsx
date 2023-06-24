import { ProductContext } from 'contexts/Product/Product'
import { useContext } from 'react'
import ProductList from './ProductList'
import SearchProduct from './SearchProduct'

export default function PageProduct() {
  const { products } = useContext(ProductContext)
  return <>{products.isMethod ? <SearchProduct /> : <ProductList />}</>
}
