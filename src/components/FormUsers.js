import React from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import styled from "styled-components";

const FormFrap = styled.div`
    width: 400px;
    
`
const FormUsers = () => {
    return (
        <>
            <FormFrap>
                <TextField style={{ marginTop: "10px" }} id="outlined-basic" label="name" variant="outlined" />
                <TextField style={{ marginTop: "10px" }} id="outlined-basic" label="last name" variant="outlined" />
                <TextField style={{ marginTop: "10px" }} id="outlined-basic" label="email" variant="outlined" />
                <TextField style={{ marginTop: "10px" }} id="outlined-basic" label="address" variant="outlined" />
                <TextField style={{ marginTop: "10px" }} id="outlined-basic" label="phone" variant="outlined" />
                <Button style={{ position: 'absolute', top: "500px", left: "330" }} variant="outlined" color="secondary">< PersonAddIcon /></Button>

            </FormFrap>
        </>
    )
};

export default FormUsers;