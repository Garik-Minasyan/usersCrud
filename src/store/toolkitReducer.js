import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
    usersCrud: [
        {
            name: "Garik",
            lastName: "Minasyan",
            email: "garominas96@gmail.com",
            address: "Nor Norq",
            phone: "098714304",
            id: new Date().toLocaleString
        },
        {
            name: "Vardan",
            lastName: "Davtyan",
            email: "vard96@gmail.com",
            address: "Avan",
            phone: "098554565",
            id: new Date().toLocaleString
        }
    ]
}
export const addNewUser = createAction("ADDNEWUSER");

export default createReducer(initialState, {
    [addNewUser]: (state, action) => {
        console.log(state)
        state.addNewUser = [
            ...state.addNewUser,
            // {
            //     name: action.payload.nameFolder,
            //     direction: action.payload.locationPatname,
            //     id: uuidv4(),
            //     type: 'folder',
            // },
        ]
    },
});
