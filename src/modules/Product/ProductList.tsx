import { Stack } from '@mui/system'
import Grid from '@mui/material/Grid'
import ProductCard from '@components/ProductCart/ProductCart'
import FullTextField from '@components/FullTextField/TextField'

import { ProductContext } from 'contexts/Product/Product'
import { useContext } from 'react'
import { ProductItem } from 'constants/constants'
import NotFound from '@components/NotFound/NotFound'
import HomeScreen from '@components/HomeScreen/HomeScreen'

export default function ProductList() {
  const { products, isSearch } = useContext(ProductContext)
  return (
    <>
      <Stack sx={{ margin: '10px 30px', position: 'relative' }}>
        <Stack sx={{ height: 150 }}>
          <FullTextField />
        </Stack>
        {isSearch ? (
          <Stack>
            {products.products.length ? (
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {products?.products.map((product: ProductItem, idx: string) => (
                  <Grid
                    item
                    xs={3}
                    sx={{ marginBottom: '10px' }}
                    key={`${product?.brand}-${idx}`}
                  >
                    <ProductCard item={product} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <NotFound />
            )}
          </Stack>
        ) : (
          <HomeScreen />
        )}
      </Stack>
    </>
  )
}
