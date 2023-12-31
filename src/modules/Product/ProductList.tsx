/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect, useRef, useCallback } from 'react'
import { Stack } from '@mui/system'
import Grid from '@mui/material/Grid'
import ProductCard from '@components/ProductCart/ProductCart'
import { ProductContext } from 'contexts/Product/Product'
import { ProductItem, productPrefix } from 'constants/constants'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import NotFound from '@components/NotFound/NotFound'
import { isCancel } from 'axios'
import axios from 'axios'
import axiosClient from 'helpers/httpClient'

export default function ProductList() {
  const { products, fetchProductList, hasMore, resetHasMore } = useContext(
    ProductContext,
  )

  const [pageNumber, setPageNumber] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [listProducts, setListProducts] = useState<any>([])
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState(false)
  const [params, setParams] = useState('')
  const axiosSource = useRef<any>(null)

  const newCancelToken = useCallback(() => {
    axiosSource.current = axios?.CancelToken?.source()
    return axiosSource.current.token
  }, [])

  useEffect(() => {
    setPageNumber(0)
    const url = `${productPrefix}products/search?q=${params}`
    if (params) {
      axiosClient
        .get(url, { cancelToken: newCancelToken() })
        .then((res: any) => {
          setListProducts(res.data.products)
        })
        .catch((error: string) => {
          if (axios.isCancel(error)) return
        })

      return () => {
        axiosSource.current.cancel()
      }
    } else {
      getProducts()
      resetHasMore()
      setSearch(false)
    }
  }, [newCancelToken, isCancel, params])

  const onIntersection = (entries: any) => {
    const firstEntry = entries[0].isIntersecting
    if (firstEntry && hasMore) {
      setVisible(true)
      setPageNumber((prevPageNumber) => prevPageNumber + 2)
    }
  }

  const handleChangeSearch = (params: string) => {
    setSearch(true)
    setParams(params)
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
    if (!search) {
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
  }, [visible, hasMore])

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <Stack sx={{ margin: '10px 30px', position: 'relative' }}>
        <Stack sx={{ height: 150 }}>
          <Box
            sx={{
              width: 500,
              maxWidth: '100%',
            }}
          >
            <TextField
              fullWidth
              label="Search...."
              id="fullWidth"
              onChange={(e) => {
                handleChangeSearch(e.target.value)
              }}
              sx={{ marginBottom: '30px', marginTop: '30px' }}
            />
          </Box>
        </Stack>
        {listProducts.length > 0 ? (
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
        ) : (
          <NotFound />
        )}
      </Stack>
    </div>
  )
}
