import AddToCart from '@/components/products/AddToCart'
import data from '@/lib/data'
import productService from '@/lib/services/productService'
import { convertDocToObj } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  return product
    ? {
        title: product.name,
        description: product.description
      }
    : { title: 'Producto no encontrado' }
}

export default async function ProductDetails({
  params
}: {
  params: { slug: string }
}) {
  // const product = data.products.find((product) => product.slug === params.slug)
  const product = await productService.getBySlug(params.slug)
  return !product ? (
    <h1>Producto no encontrado</h1>
  ) : (
    <>
      <div className="my-2">
        <Link href="/">Volver a productos</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vm"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              Valoración: {product.rating} de {product.numReviews}
            </li>
            <li>{product.brand}</li>
            <li>
              Descripción: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Precio</div>
                <div>{product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? 'En stock' : 'No disponible'}
                </div>
              </div>
              {product.countInStock !== 0 && (
                <div className="card-actions justify-center">
                  <AddToCart
                    item={{
                      ...convertDocToObj(product), //convertDocToObj used here because of warning 'Only plain objects can be passed to CLient Components from Server components
                      // https://www.youtube.com/watch?v=zWEvbGdUhRg 1h43'20''
                      qty: 0,
                      color: '',
                      size: ''
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
