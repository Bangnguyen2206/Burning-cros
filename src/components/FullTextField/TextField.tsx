/* eslint-disable react-hooks/exhaustive-deps */
import { ProductContext } from 'contexts/Product/Product'
import { useContext } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function FullTextField() {
  const { searchProductList } = useContext(ProductContext)

  const handleChangeSearch = (params: string) => {
    searchProductList(params)
  }

  return (
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
  )
}
