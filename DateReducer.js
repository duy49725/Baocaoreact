import {createSlice} from "@reduxjs/toolkit";
export const DateSlice = createSlice({
    name: "date",
    initialState:{
        date: "",
    },
    reducers:{
        setDate: (state, action) => {
            return { ...state, date: action.payload };
        }
    }
});

export const {setDate} = DateSlice.actions;

export default DateSlice.reducer;