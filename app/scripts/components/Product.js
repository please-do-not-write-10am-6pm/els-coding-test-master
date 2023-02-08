import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ product }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <img src={product.picture} />
      </div>
      <div className='card-body'>
        <div className='title'>{product.name}</div>
        <div className='description'>{product.about}</div>
      </div>
      <div className='card-footer'>
        <div className='tags'>
          {product.tags.map((tag, index) => (
            <div key={index} className='tag'>
              {tag}
            </div>
          ))}
        </div>
        <div className='price'>$ {product.price}</div>
      </div>
    </div>
  )
}

Product.PropTypes = {
  product: PropTypes.shape({
    picture: PropTypes.string,
    name: PropTypes.string,
    about: PropTypes.string,
    price: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default Product
