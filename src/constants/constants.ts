export interface ProductItem {
  id: number
  brand: string
  description: string
  discountPercentage: number
  images: Array<string>[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export const productPrefix = 'https://dummyjson.com/'

export const BASE_COLOR = 'RGBA( 0, 128, 128, 1 )'
