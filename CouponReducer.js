import {createSlice} from "@reduxjs/toolkit";
export const CouponSlice = createSlice({
    name: "coupon",
    initialState:{
        coupon: "0",
    },
    reducers:{
        setCoupon: (state, action) => {
            return { ...state, coupon: action.payload };
        }
    }
});

export const {setCoupon, cleanaCoupon} = CouponSlice.actions;

export default CouponSlice.reducer;