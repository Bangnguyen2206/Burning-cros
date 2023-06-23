import { Stack } from '@mui/system'
import Grid from '@mui/material/Grid'

import ProductCard from '@components/ProductCart/ProductCart'
import FullTextField from '@components/FullTextField/TextField'

export default function PageProduct() {
  return (
    <>
      <Stack sx={{ margin: '10px 30px' }}>
        <FullTextField />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3} sx={{ marginBottom: '10px' }}>
            <ProductCard />
          </Grid>
          <Grid item xs={3} sx={{ marginBottom: '10px' }}>
            <ProductCard />
          </Grid>
          <Grid item xs={3} sx={{ marginBottom: '10px' }}>
            <ProductCard />
          </Grid>
          <Grid item xs={3} sx={{ marginBottom: '10px' }}>
            <ProductCard />
          </Grid>
          <Grid item xs={3} sx={{ marginBottom: '10px' }}>
            <ProductCard />
          </Grid>
          <Grid item xs={3} sx={{ marginBottom: '10px' }}>
            <ProductCard />
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}
