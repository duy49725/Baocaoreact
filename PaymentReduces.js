import {createSlice} from "@reduxjs/toolkit";
export const PaymentSlice = createSlice({
    name: "payment",
    initialState:{
        payment: "",
    },
    reducers:{
        setPayment: (state, action) => {
            return { ...state, payment: action.payload };
        }
    }
});

export const {setPayment, cleanaPayment} = PaymentSlice.actions;

export default PaymentSlice.reducer;