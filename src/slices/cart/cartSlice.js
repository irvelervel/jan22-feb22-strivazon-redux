// in here we're going to define all the logic for managing the cart slice in the Redux Store

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  // initialState defines what is the value of this slice of the Store every time the Store initializes
  // Redux Store Slices are ALWAYS objects!
  initialState: {
    content: [],
  },
  reducers: {
    // in here you want to define the interactions this slice will make available,
    // and how they impact this slice of the store
    // what do we want to do with this slice?
    addToCart: () => {
      // here we want to return the new value of this slice of the store
      // to be finished later on... :)
    },
  },
})

// let's now make this slice part of the Redux Store we have running!

// createSlice generates a lot of useful things: action, reducer, ...
export default cartSlice.reducer
