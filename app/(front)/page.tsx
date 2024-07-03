import ProductItem from '@/components/products/ProductItem'
// import data from '@/lib/data'
import productService from '@/lib/services/productService'
import data from '@/lib/data'

import React from 'react'

const Home = () => {

const Home = async () => {
  const featuredProducts = await productService.getFeatured()
  const latestProducts = await productService.getLatest()

  return (
    <>
      <h2 className="text-2xl py-2">Últimos productos</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* {data.products.map((product) => ( */}
        {latestProducts.map((product) => (
          <ProductItem key={product.slug} product={convertDocToObj(product)} />
        ))}
      </div>
    </>
  )
}

export default Home
