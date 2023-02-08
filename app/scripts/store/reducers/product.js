import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import api from '../../api'

const initialState = {
  loading: false,
  total: 0,
  products: [],
}

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (searchKey) => {
    const response = await api.fetchProducts(searchKey)

    return response.data
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.total = 0
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload.results
        state.total = state.products.length
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
      })
  },
})

export default productSlice.reducer
