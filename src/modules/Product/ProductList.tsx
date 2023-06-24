/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect, useRef } from 'react'
import { Stack } from '@mui/system'
import Grid from '@mui/material/Grid'
import ProductCard from '@components/ProductCart/ProductCart'
import FullTextField from '@components/FullTextField/TextField'

import { ProductContext } from 'contexts/Product/Product'
import { ProductItem } from 'constants/constants'
import LoadingSpinner from '@components/LoadingSpinner/LoadingSpinner'

export default function ProductList() {
  const { products, fetchProductList, isLoading, hasMore } = useContext(
    ProductContext,
  )
  const [pageNumber, setPageNumber] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [listProducts, setListProducts] = useState<any>([])
  const [visible, setVisible] = useState(false)

  const onIntersection = (entries: any) => {
    const firstEntry = entries[0].isIntersecting
    if (firstEntry && hasMore) {
      setVisible(true)
      setPageNumber((prevPageNumber) => prevPageNumber + 2)
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

  const getProducts = () => {
    fetchProductList(pageNumber)
      .then((res: any) => {
        setListProducts(res.products)
      })
      .catch((error: string) => {
        return error
      })
  }

  const handleGetMoreProduct = () => {
    if (visible) {
      fetchProductList(pageNumber)
        .then((res: any) => {
          setVisible(false)
          setListProducts([...listProducts, ...res.products])
        })
        .catch((error: string) => {
          return error
        })
    }
  }

  useEffect(() => {
    handleGetMoreProduct()
  }, [visible])

  useEffect(() => {
    getProducts()
  }, [])

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
              {listProducts?.map((product: ProductItem, idx: string) => (
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
          </Stack>
        </Stack>
      )}
    </div>
  )
}
