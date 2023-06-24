import { ProductProvider } from 'contexts/Product/Product'
import PageProduct from './PageProduct'

export default function MainProducts() {
  return (
    <ProductProvider>
      <PageProduct />
    </ProductProvider>
  )
}
