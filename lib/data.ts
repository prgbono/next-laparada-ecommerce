import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false
    }
  ],

  products: [
    {
      name: 'Gambas',
      slug: 'gambas',
      category: 'Marisco',
      image: '/images/optimized/marisco/gambas.jpg',
      price: 25,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 25,
      countInStock: 25, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Gambas de La Parada',
      isFeatured: true,
      banner: '/images/optimized/banner/crab.jpg'
    },
    {
      name: 'Pulpo',
      slug: 'pulpo',
      category: 'Pescado',
      image: '/images/optimized/pescado/pulpo.jpg',
      price: 14,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 14,
      countInStock: 14, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Pulpo de La Parada',
      isFeatured: false
    },
    {
      name: 'Cigalas',
      slug: 'cigalas',
      category: 'Marisco',
      image: '/images/optimized/marisco/cigalas.jpg',
      price: 28,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 28,
      countInStock: 28, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Cigalas de La Parada',
      isFeatured: true,
      banner: '/images/optimized/banner/shrimp.jpg'
    },
    {
      name: 'Atún',
      slug: 'atun',
      category: 'Pescado',
      image: '/images/optimized/pescado/atun.jpg',
      price: 18,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 18,
      countInStock: 18, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Atún de La Parada',
      isFeatured: false
    },
    {
      name: 'Huevas',
      slug: 'huevas',
      category: 'Pescado',
      image: '/images/optimized/pescado/hueva.jpg',
      price: 28,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 12,
      countInStock: 12, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Huevas de La Parada',
      isFeatured: false
    },
    {
      name: 'Pescado',
      slug: 'pescado',
      category: 'Pescado',
      image: '/images/optimized/pescado/pescado.jpg',
      price: 8.95,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 8.95,
      countInStock: 8.95, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Pescados de La Parada',
      isFeatured: false
    },
    {
      name: 'Patas',
      slug: 'patas',
      category: 'Marisco',
      image: '/images/optimized/marisco/patas.jpg',
      price: 27,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 27,
      countInStock: 27, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Patas de La Parada',
      isFeatured: false
    },
    {
      name: 'Gambones',
      slug: 'gambones',
      category: 'Marisco',
      image: '/images/optimized/marisco/gambones.jpg',
      price: 18,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 18,
      countInStock: 18, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Gambones de La Parada',
      isFeatured: false
    },
    {
      name: 'Langostino Tigre',
      slug: 'tigres',
      category: 'Marisco',
      image: '/images/optimized/marisco/tigres.jpg',
      price: 22,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 22,
      countInStock: 22, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Tigres de La Parada',
      isFeatured: false
    },
    {
      name: 'Bocas',
      slug: 'bocas',
      category: 'Marisco',
      image: '/images/optimized/marisco/bocas.png',
      price: 26,
      brand: 'Brand',
      rating: 4.5,
      numReviews: 26,
      countInStock: 26, //TODO: Rename a KgsInStock
      stockLimit: 5,
      description: 'Bocas de La Parada',
      isFeatured: false
    }
  ]
}

export default data
