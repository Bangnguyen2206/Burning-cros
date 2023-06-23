import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function FullTextField() {
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
        sx={{ marginBottom: '30px', marginTop: '30px' }}
      />
    </Box>
  )
}
