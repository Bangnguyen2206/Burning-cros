/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@mui/system'
import Grid from '@mui/material/Grid'
import ProductCard from '@components/ProductCart/ProductCart'
import FullTextField from '@components/FullTextField/TextField'

import { ProductContext } from 'contexts/Product/Product'
import { useContext, useState, useEffect } from 'react'
import { ProductItem } from 'constants/constants'
import NotFound from '@components/NotFound/NotFound'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

export default function ProductList() {
  const { products, fetchProductList, isLoading } = useContext(ProductContext)
  const [pageNumber, setPageNumber] = useState(20)

  useEffect(() => {
    fetchProductList(pageNumber)
  }, [pageNumber])

  return (
    <>
      <Stack sx={{ margin: '10px 30px', position: 'relative' }}>
        <Stack sx={{ height: 150 }}>
          <FullTextField />
        </Stack>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Stack>
            {products.products.length && !isLoading ? (
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
        )}
      </Stack>
    </>
  )
}
