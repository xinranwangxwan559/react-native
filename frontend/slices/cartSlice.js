import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';



const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            let itemIndex = state.items.findIndex(item => item._id == action.payload.id);
            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.payload.id}) as its not in cart!`)
            }
            state.items = newCart;
        },
        emptyCart: (state, action) => {
            state.items = [];
        }

    }
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export const selectCartItems = state => state.cart.items;
export const selectCartItemsById = createSelector(
    [selectCartItems, (_, id) => id],
    (items, id) => items.filter(item => item._id === id)
  );
  export const selectCartTotal = createSelector(
    [selectCartItems],
    items => items.reduce((total, item) => total + item.price, 0)
  );
export default cartSlice.reducer