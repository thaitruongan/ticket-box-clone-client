import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    currentRoom: {},
};

const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        addCurrentRoom(state, action) {
            state.token = action.payload.token;
            state.currentRoom = action.payload.room
        },
    },
});

const roomReducer = roomSlice.reducer;
export default roomReducer;

export const {addCurrentRoom} = roomSlice.actions;

export const selectCurrentRoom = (state) => state.room.currentRoom;
