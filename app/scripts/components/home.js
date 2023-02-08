/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react'
import { useSelector } from 'react-redux'

import Product from './Product'

const Home = () => {
  const { products, total } = useSelector((rootState) => rootState.product)

  return (
    <section id='home'>
      <div className='content'>
        <h1>{total} searched products</h1>
        <div className='content-body'>
          {products.map((product, index) => (
            <Product key={`${product.id}_${index}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Export out the React functional Component
export default Home
