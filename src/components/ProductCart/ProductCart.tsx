import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

const ProductCard = React.forwardRef(({ item }: any, ref: any) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        border: '1px solid RGBA( 0, 128, 128, 1 )',
        height: 450,
      }}
      ref={ref}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <Rating name="disabled" value={item.rating} />
          </IconButton>
        }
        title={item.brand}
        subheader={`${item.price}$ - Stock: ${item.stock}`}
      />
      <CardMedia component="img" height="194" image={item.thumbnail} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  )
})
export default ProductCard
