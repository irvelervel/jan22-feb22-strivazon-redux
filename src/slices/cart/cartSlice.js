// in here we're going to define all the logic for managing the cart slice in the Redux Store

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  // initialState defines what is the value of this slice of the Store every time the Store initializes
  // Redux Store Slices are ALWAYS objects!
  initialState: {
    stefano: true, // <-- just a demo, tomorrow we're going to make a real example
    content: [],
  },
  reducers: {
    // in here you want to define the interactions this slice will make available,
    // and how they impact this slice of the store
    // what do we want to do with this slice?
    addToCart: (state, action) => {
      // here we want to return the new value of this slice of the store
      // let's compute the new value for the cart slice
      return {
        ...state, // I'm spreading over the content of the state to not lose other properties in the object
        // I'm returning from this case, like 'stefano'!
        // in here the content array should have one object more!
        content: [...state.content, action.payload],
        // I want to add a new book here! I can find it in the PAYLOAD property of the action

        // the shape of this object should look like the initialState! you want to preserve its shape
      }
    },
    removeFromCart: (state, action) => {
      // from here I'm supposed to return the new value of this slice
      return {
        // 'state' is the current state I'm in! let's spread its content, so my new state will start exactly like the old one
        ...state,
        content: state.content.filter((book, i) => i !== action.payload),
      }
    },
  },
})

// let's now make this slice part of the Redux Store we have running!

// createSlice generates a lot of useful things: action, reducer, ...
export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions
