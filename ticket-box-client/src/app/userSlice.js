import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    token: "",
    currentUser: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addCurrentUser(state, action) {
            state.token = action.payload.token;
            state.currentUser = action.payload.user
        },

        removeCurrentUser(state) {
            state.token = "";
            state.currentUser = {}
        },
    },
});

const userReducer = userSlice.reducer;
export default userReducer;

export const {addCurrentUser, updateCurrentUser, removeCurrentUser} = userSlice.actions;

export const selectToken = (state) => state.user.token;
export const selectCurrentUser = (state) => state.user.currentUser;