import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import UserModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

// Available seed data in app/api/products/seed
export const GET = async (request: NextRequest) => {
  const { users, products } = data
  await dbConnect()

  // delete all records in the user collection
  await UserModel.deleteMany()

  // insert users from data.users in the db
  await UserModel.insertMany(users)

  await ProductModel.deleteMany()
  await ProductModel.insertMany(products)

  return NextResponse.json({
    message: 'Seed data successfully loaded',
    users,
    products
  })
}
