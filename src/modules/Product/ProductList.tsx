/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect, useCallback, useRef } from 'react'
import { Stack } from '@mui/system'
import Grid from '@mui/material/Grid'
import ProductCard from '@components/ProductCart/ProductCart'
import FullTextField from '@components/FullTextField/TextField'

import { ProductContext } from 'contexts/Product/Product'
import { ProductItem } from 'constants/constants'
import NotFound from '@components/NotFound/NotFound'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

export default function ProductList() {
  const { products, fetchProductList, isLoading, hasMore } = useContext(
    ProductContext,
  )
  const [pageNumber, setPageNumber] = useState(20)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const onIntersection = (entries: any) => {
    const firstEntry = entries[0].isIntersecting
    if (firstEntry && hasMore) {
      setPageNumber((prevPageNumber) => prevPageNumber + 10)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection)
    if (observer && containerRef.current) {
      observer.observe(containerRef.current)
    }
    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [products])

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
                    xs={12}
                    md={4}
                    lg={3}
                    sx={{ marginBottom: '10px' }}
                    key={`${product?.brand}-${idx}`}
                  >
                    <ProductCard item={product} ref={containerRef} />
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
