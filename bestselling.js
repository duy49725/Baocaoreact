import { createSlice } from "@reduxjs/toolkit";

export const bestSellingSlice = createSlice({
    name: "best",
    initialState: {
        best: [],
    },
    reducers:{
        getBestSelling: (state, action) =>{
            state.best.push({...action.payload});
        },
        incrementQty:(state, action) => {
            const itemPresent = state.best.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        decrementQty: (state, action) => {
            const itemPresent = state.best.find((item) => item.id === action.payload.id);
            if(itemPresent.quantity == 1){
                itemPresent.quantity = 0;
                const removeItem = state.best.filter((item) => item.id !== action.payload.id)
                state.cart = removeItem;
            }else{
                itemPresent.quantity--;
            }
        }
    }
})

export const {getBestSelling, incrementQty, decrementQty} = bestSellingSlice.actions;
export default bestSellingSlice.reducer;