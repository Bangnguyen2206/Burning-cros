import { Stack, Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

function LoadingSpinner() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50vh',
      }}
    >
      <Stack>
        <CircularProgress />
      </Stack>
    </Grid>
  )
}

export default LoadingSpinner
