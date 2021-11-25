import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import { addNewUser } from './../store/toolkitReducer';
import { useDispatch } from 'react-redux';

const FormFrap = styled.div`
    width: 400px;
`
const FormUsers = ({ inputEl }) => {
    const userFields = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    };
    const [userInfo, setUserInfo] = useState(userFields);

    const dispatch = useDispatch();

    const { name, lastName, email, address, phone } = userInfo;

    const onInputChange = e => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });


    };

    const onSubmit = (e) => {
        if (e.which === 13) {
            dispatch(addNewUser({
                name: name,
                lastName: lastName,
                email: email,
                address: address,
                phone: phone
            }));
            setUserInfo(userFields);
        }
    }

    return (
        <FormFrap>
            <form>
                <TextField
                    value={name}
                    onKeyPress={e => onSubmit(e)}
                    name="name"
                    inputRef={inputEl}
                    onChange={e => onInputChange(e)}
                    style={{ marginTop: "10px" }}
                    id="outlined-basic"
                    label="name"
                    variant="outlined"
                />
                <TextField
                    value={lastName}
                    onKeyPress={e => onSubmit(e)}
                    name="lastName"
                    onChange={e => onInputChange(e)}
                    style={{ marginTop: "10px" }}
                    id="outlined-basic"
                    label="last name"
                    variant="outlined"
                />
                <TextField
                    value={email}
                    onKeyPress={e => onSubmit(e)}
                    name="email"
                    onChange={e => onInputChange(e)}
                    style={{ marginTop: "10px" }}
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                />
                <TextField
                    value={address}
                    onKeyPress={e => onSubmit(e)}
                    name="address"
                    onChange={e => onInputChange(e)}
                    style={{ marginTop: "10px" }}
                    id="outlined-basic"
                    label="address"
                    variant="outlined"
                />
                <TextField
                    value={phone}
                    onKeyPress={e => onSubmit(e)}
                    name="phone"
                    onChange={e => onInputChange(e)}
                    style={{ marginTop: "10px" }}
                    id="outlined-basic"
                    label="phone"
                    variant="outlined"
                />
            </form>
        </FormFrap>
    )
}

export default FormUsers;