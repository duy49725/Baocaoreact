import {createSlice} from "@reduxjs/toolkit";
export const AddressSlice = createSlice({
    name: "address",
    initialState:{
        address: "",
    },
    reducers:{
        setAddress: (state, action) => {
            return { ...state, address: action.payload };
        }
    }
});

export const {setAddress, cleanaAddress} = AddressSlice.actions;

export default AddressSlice.reducer;