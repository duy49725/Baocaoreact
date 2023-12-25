const { createSlice } = require('@reduxjs/toolkit');

const FavouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        favourite: [],
    },
    reducers: {
        addToFavourite: (state, actions) => {
            const isAvailable = state.favourite.find((value)=>value.name == actions.payload.name);
            if(isAvailable){
                isAvailable.quantity++;
            }else{
                state.favourite.push({...actions.payload, quantity: 1})
            }
        },
        removeFromFavourite: (state, actions) => {
            const newList = state.favourite.filter((value)=>value.name != actions.payload.name);
            state.favourite = newList;
        },
        clearFavourite: (state) =>{
            state.favourite = [];
        }
    }
})

export const { addToFavourite, removeFromFavourite, clearFavourite} = FavouriteSlice.actions;
export default FavouriteSlice.reducer;