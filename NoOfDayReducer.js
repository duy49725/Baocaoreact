import {createSlice} from "@reduxjs/toolkit";
export const DaySlice = createSlice({
    name: "day",
    initialState:{
        day: "",
    },
    reducers:{
        setDay: (state, action) => {
            return { ...state, day: action.payload };
        }
    }
});

export const {setDay} = DaySlice.actions;

export default DaySlice.reducer;