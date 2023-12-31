import { Stack, Grid, Typography } from '@mui/material'
import notFound from 'assets/notFound.png'

function NotFound() {
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
        <img
          src={notFound}
          alt={'Not Found'}
          loading="lazy"
          style={{ width: '200px', height: '200px' }}
        />
      </Stack>

      <Typography
        variant="h4"
        sx={{
          my: 2,
          fontSize: '2rem',
          fontWeight: '600',
        }}
        color="secondary.main"
      >
        Không tìm thấy
      </Typography>

      <Typography
        sx={{
          my: 1,
          display: 'flex',
          alignItems: 'center',
          fontSize: '1rem',
          mt: '0',
          mb: '0',
        }}
        color="text.primary"
      >
        Rất tiếc, không thể tìm thấy sản phẩm bạn yêu cầu
      </Typography>
    </Grid>
  )
}

export default NotFound
