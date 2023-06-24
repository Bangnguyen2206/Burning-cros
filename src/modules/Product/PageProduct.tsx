import { ProductProvider } from 'contexts/Product/Product'
import ProductList from './ProductList'

export default function PageProduct() {
  return (
    <>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </>
  )
}
