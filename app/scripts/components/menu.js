/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../store/reducers/product'

const Menu = () => {
  const dispatch = useDispatch()
  const [showingSearch, setShowingSearch] = useState(false)

  const showSearchContainer = (e) => {
    e.preventDefault()
    setShowingSearch(!showingSearch)
  }

  const onSearch = (e) => {
    dispatch(fetchProducts(e.target.value))
  }

  return (
    <header className='menu'>
      <div className='menu-container'>
        <div className='menu-holder'>
          <h1>ELC</h1>
          <nav>
            <a href='#' className='nav-item'>
              HOLIDAY
            </a>
            <a href='#' className='nav-item'>
              WHAT'S NEW
            </a>
            <a href='#' className='nav-item'>
              PRODUCTS
            </a>
            <a href='#' className='nav-item'>
              BESTSELLERS
            </a>
            <a href='#' className='nav-item'>
              GOODBYES
            </a>
            <a href='#' className='nav-item'>
              STORES
            </a>
            <a href='#' className='nav-item'>
              INSPIRATION
            </a>

            <a href='#' onClick={showSearchContainer}>
              <i className='material-icons search'>search</i>
            </a>
          </nav>
        </div>
      </div>
      <div className={(showingSearch ? 'showing ' : '') + 'search-container'}>
        <input type='text' onChange={onSearch} />
        <a href='#' onClick={showSearchContainer}>
          <i className='material-icons close'>close</i>
        </a>
      </div>
    </header>
  )
}

// Export out the React functional Component
export default Menu
