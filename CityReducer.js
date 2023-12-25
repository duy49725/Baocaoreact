import {createSlice} from "@reduxjs/toolkit";
export const CitySlice = createSlice({
    name: "city",
    initialState:{
        city: "",
    },
    reducers:{
        setCity: (state, action) => {
            return { ...state, city: action.payload };
        }
    }
});

export const {setCity} = CitySlice.actions;

export default CitySlice.reducer;