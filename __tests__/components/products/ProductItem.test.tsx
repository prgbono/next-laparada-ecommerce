import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ProductItem from '@/components/products/ProductItem'

describe('Tests in <ProductItem />', () => {
  const product = {
    _id: 'test',
    name: 'name',
    slug: 'slug',
    image: '/images/optimized/marisco/gambas.jpg',
    price: 1,
    description: 'description',
    category: 'category',
    rating: 2,
    numReviews: 3,
    countInStock: 4
  }

  test('<ProductItem /> component renders', () => {
    render(<ProductItem key={product.slug} product={product} />)
    const liElement = screen.getByTestId('product-item')
    expect(liElement.className).toBe('card bg-base-300 shadow-xl mb-4')
  })
})
