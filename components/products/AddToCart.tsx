'use client'
import { useState, useEffect } from 'react'
import useCartService from '@/lib/hooks/useCartStore'
import { OrderItem } from '@/lib/models/OrderModel'
import { useRouter } from 'next/navigation'

const AddToCart = ({ item }: { item: OrderItem }) => {
  const router = useRouter()
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug))
  }, [item, items])

  const AddToCartHandler = () => {
    increase(item)
  }

  // return <div>AddToCart</div>
  return existItem ? (
    <div>
      <button className="btn" type="button" onClick={() => decrease(existItem)}>
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button className="btn" type="button" onClick={() => increase(existItem)}>
        +
      </button>
    </div>
  ) : (
    <button
      onClick={AddToCartHandler}
      className="btn btn-primary w-full"
      type="button"
    >
      Añadir al carrito
    </button>
  )
}

export default AddToCart
