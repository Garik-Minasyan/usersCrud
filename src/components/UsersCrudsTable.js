import React from "react";
import { useSelector } from 'react-redux';
import styled from "styled-components";

const BtnEditWrapper = styled.button`
    width: 100px;
    height: 40px;
    background-color: darkgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`
const BtnDelWrapper = styled.button`
    width: 100px;
    height: 40px;
    background-color: darkred;      
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`

const UsersCrudsTable = () => {
    const usersCrud = useSelector(state => state.toolkit.usersCrud);
    return (
        <div>
            {
                usersCrud && usersCrud.map((item, index) => {
                    console.log(item)
                    return (
                        <div key={index}>
                            {item.name}
                            <div>
                                <BtnEditWrapper>Edit</BtnEditWrapper>
                                <BtnDelWrapper>Delete</BtnDelWrapper>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default UsersCrudsTable;