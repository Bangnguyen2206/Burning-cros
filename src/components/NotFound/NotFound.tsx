import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import Link from '@mui/material/Link'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: any) => ({
  navbar: {
    display: 'flex',
    padding: theme.spacing(2, 0),
    width: '100%',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: '60px',
    padding: '0',
    position: 'fixed',
    top: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '350px',
    height: 'auto',
    objectFit: 'contain',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 3),
    },
  },
  text: {
    color: theme.palette.secondary.main,
    '&.header-res': {
      marginTop: '30px',
      marginBottom: '7px',
    },
  },
  button: {
    width: '100%',
    maxWidth: '180px',
    background: theme.palette.secondary.main,
    height: '45px',
    marginBottom: 'initial',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    '&.btn-back': {
      color: theme.palette.secondary.contrastText,
      textDecoration: 'none',
      marginTop: '20px',
      fontSize: '16px',
    },
  },
  logo: {
    height: '40px',
    display: 'block',
  },
  icon: {
    position: 'absolute',
    right: '25px',
    color: theme.palette.secondary.contrastText,
    '&.back': {
      color: theme.palette.secondary.contrastText,
      fontSize: '1.125rem',
    },
  },
}))

function NotFound() {
  const classes = useStyles()
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <span className="bg-notfound"></span>
      </Box>

      <Typography
        variant="h4"
        sx={{
          my: 1,
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
          fontSize: '0.875rem',
          mt: '0',
          mb: '0',
        }}
        color="text.primary"
      >
        Rất tiếc, không thể tìm thấy trang bạn yêu cầu
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem' }}
        color="text.primary"
      >
        Vui lòng quay lại trang chủ
      </Typography>

      <Link
        href="/home"
        className={classes.button + ' btn-back'}
        sx={{ '&:hover': { textDecoration: 'none' } }}
      >
        <IconButton className={classes.icon + ' back'}>
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </IconButton>
        Quay về
      </Link>
    </Grid>
  )
}

export default NotFound
