import { createReducer, createAction } from "@reduxjs/toolkit";
import { uuid } from 'uuidv4';

const initialState = {
    usersCrud: [
        {
            name: "Garik",
            lastName: "Minasyan",
            email: "garominas96@gmail.com",
            address: "Nor Norq",
            phone: "098714304",
            id: uuid()
        },
        {
            name: "Vardan",
            lastName: "Davtyan",
            email: "vard96@gmail.com",
            address: "Avan",
            phone: "098554565",
            id: uuid()
        }
    ]
}
export const addNewUser = createAction("ADDNEWUSER");
export const deleteUserList = createAction("DELETEUSERLIST");

export default createReducer(initialState, {
    [addNewUser]: (state, action) => {
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
    }
});
