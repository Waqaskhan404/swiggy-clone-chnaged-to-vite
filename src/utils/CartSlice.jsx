import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)

        },
        removeItem:(state,action)=>{
            const updatedItems = state.items.filter(item => item.name !== action.payload.name);
            return {
                ...state,
                items: updatedItems,
              };

        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
});

export const {addItem,removeItem,clearCart}=CartSlice.actions;
export default CartSlice.reducer;