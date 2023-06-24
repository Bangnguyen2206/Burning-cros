/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react'
import { Stack } from '@mui/system'
import Grid from '@mui/material/Grid'
import ProductCard from '@components/ProductCart/ProductCart'
import FullTextField from '@components/FullTextField/TextField'

import { ProductContext } from 'contexts/Product/Product'
import { ProductItem } from 'constants/constants'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

export default function SearchProduct() {
  const { products, isLoading, hasMore } = useContext(ProductContext)
  return (
    <div>
      {isLoading && !hasMore ? (
        <LoadingSpinner />
      ) : (
        <Stack sx={{ margin: '10px 30px', position: 'relative' }}>
          <Stack sx={{ height: 150 }}>
            <FullTextField />
          </Stack>
          <Stack>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {products?.products.map((product: ProductItem, idx: string) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={3}
                  sx={{ marginBottom: '10px' }}
                  key={`${product?.brand}-${idx}`}
                >
                  <ProductCard item={product} />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      )}
    </div>
  )
}