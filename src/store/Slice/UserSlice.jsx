import {createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name : 'user',
    initialState : [],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload) 
        },
        deleteUsers(state,action){
            console.log("console log");

        },
    },
});

console.log(UserSlice.actions.addUser());

export const {addUser , removeUser, deleteUsers} = UserSlice.actions;
export default UserSlice.reducer;



