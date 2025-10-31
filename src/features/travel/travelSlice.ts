import { createSlice } from '@reduxjs/toolkit';

interface ITravelState {
    visited: [];
    liked: [];
}

const initialState: ITravelState = {
    visited: [],
    liked: [],
};

const travelSlice = createSlice({
    name: 'travel',
    initialState,
    reducers: {
        likeCountry: () => {
            console.log('test');
        },
    },
});

export const { likeCountry } = travelSlice.actions;
export default travelSlice.reducer;
