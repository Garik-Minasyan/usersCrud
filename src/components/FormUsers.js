import React from "react";
import TextField from '@material-ui/core/TextField';

import styled from "styled-components";

const FormFrap = styled.div`
    width: 400px;
    
`
const FormUsers = ({
    addUserName,
    addLastName,
    addUserEmail,
    addUserAddress,
    addUserPhone,
    inputEl
}) => {
    const onNameChange = (e) => {
        addUserName(e.target.value)
    }
    const onLastNameChange = (e) => {
        addLastName(e.target.value)
    }
    const onEmailChange = (e) => {
        addUserEmail(e.target.value)
    }
    const onAddressChange = (e) => {
        addUserAddress(e.target.value)
    }
    const onPhoneChange = (e) => {
        addUserPhone(e.target.value)
    }
    return (
        <>
            <FormFrap>
                <TextField inputRef={inputEl} onChange={(e) => onNameChange(e)} style={{ marginTop: "10px" }} id="outlined-basic" label="name" variant="outlined" />
                <TextField onChange={(e) => onLastNameChange(e)} style={{ marginTop: "10px" }} id="outlined-basic" label="last name" variant="outlined" />
                <TextField onChange={(e) => onEmailChange(e)} style={{ marginTop: "10px" }} id="outlined-basic" label="email" variant="outlined" />
                <TextField onChange={(e) => onAddressChange(e)} style={{ marginTop: "10px" }} id="outlined-basic" label="address" variant="outlined" />
                <TextField onChange={(e) => onPhoneChange(e)} style={{ marginTop: "10px" }} id="outlined-basic" label="phone" variant="outlined" />
            </FormFrap>
        </>
    )
};

export default FormUsers;