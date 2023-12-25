import {createSlice} from "@reduxjs/toolkit";
export const TimeSlice = createSlice({
    name: "time",
    initialState:{
        time: "",
    },
    reducers:{
        setTime: (state, action) => {
            return { ...state, time: action.payload };
        }
    }
});

export const {setTime} = TimeSlice.actions;

export default TimeSlice.reducer;