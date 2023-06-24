/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

import { BASE_COLOR } from 'constants/constants'

const ProductCard = React.forwardRef(
  ({ item }: any, ref: React.Ref<HTMLDivElement>) => {
    return (
      <Card
        sx={{
          maxWidth: 345,
          border: `1px solid ${BASE_COLOR}`,
          height: 400,
        }}
        ref={ref}
      >
        <CardHeader
          titleTypographyProps={{
            fontSize: 16,
          }}
          title={item.title}
          subheader={`${item.price}$ - Stock: ${item.stock}`}
        />
        <CardMedia component="img" height="194" image={item.thumbnail} />
        <CardContent>
          <Rating name="disabled" value={item.rating} />
          <Typography variant="body2" color="text.secondary">
            {item.description.slice(0, 50)}
          </Typography>
        </CardContent>
      </Card>
    )
  },
)
export default ProductCard
