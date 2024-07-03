import { cache } from 'react'
import { CACHE_REVALIDATION_MAX_TIME } from '@/lib/constants'
import dbConnect from '../dbConnect'
import ProductModel, { Product } from '../models/ProductModel'

export const revalidate = CACHE_REVALIDATION_MAX_TIME

// The use of cache is explained here: https://www.youtube.com/watch?v=zWEvbGdUhRg 1h34'30''
// TODO: Investigate if useMemo can be used instead of cache

const getLatest = cache(async () => {
  await dbConnect()
  const products: Product[] = await ProductModel.find({})
    .sort({ _id: -1 })
    .limit(10)
    .lean()
  return products
})

const getFeatured = cache(async () => {
  await dbConnect()
  const products: Product[] = await ProductModel.find({ isFeatured: true })
    .limit(3) //number of products that will be displayed in the banner
    .lean()
  return products
})

const getBySlug = cache(async (slug: string) => {
  await dbConnect()
  const product = await ProductModel.findOne({ slug }).lean()
  return product as Product
})

const productService = { getLatest, getFeatured, getBySlug }

export default productService
