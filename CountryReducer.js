import {createSlice} from "@reduxjs/toolkit";
export const CountrySlice = createSlice({
    name: "country",
    initialState:{
        country: "",
    },
    reducers:{
        setCountry: (state, action) => {
            return { ...state, country: action.payload };
        }
    }
});

export const {setCountry} = CountrySlice.actions;

export default CountrySlice.reducer;