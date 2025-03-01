import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items: [],
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            const indexToRemove = action.payload; 
            state.items = state.items.filter((item, index) => index !== indexToRemove);
          },
        clearCart: (state)=>{
            state.items.length=0;
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;