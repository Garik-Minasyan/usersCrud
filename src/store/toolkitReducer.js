import { createReducer, createAction } from "@reduxjs/toolkit";
import { uuid } from 'uuidv4';

const initialState = {
    usersCrud: [],
    editedValueForInput: []
}
export const addNewUser = createAction("ADDNEWUSER");
export const deleteUserList = createAction("DELETEUSERLIST");
export const editUser = createAction("EDITUSER");

export default createReducer(initialState, {
    [addNewUser]: (state, action) => {
        console.log(action.payload, 'kkkkkkkkkkkkk')
        state.usersCrud = [
            ...state.usersCrud,
            {
                name: action.payload.name,
                lastName: action.payload.lastName,
                email: action.payload.email,
                address: action.payload.address,
                phone: action.payload.phone,
                id: uuid()
            },
        ]
    },
    [deleteUserList]: (state, action) => {
        state.usersCrud = state.usersCrud.filter((item) => {
            return (
                item.id !== action.payload.id
            )
        })
    },
    [editUser]: (state, action) => {
        console.log(action)
    }
});
