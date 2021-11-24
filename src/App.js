import { useState, useRef } from 'react';
import './App.css';
import UsersCrudsTable from './components/UsersCrudsTable';
import FormUsers from './components/FormUsers';
import Header from './components/Header';
import { addNewUser } from './store/toolkitReducer';
import { useDispatch } from 'react-redux';

import { Button } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';


import styled from 'styled-components';

const MainWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
`

const App = () => {
    const [userName, setUserName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const dispatch = useDispatch();

    const inputEl = useRef();

    const addUserName = (valueName) => {
        setUserName(valueName)
    }
    const addLastName = (valueLastName) => {
        setUserLastName(valueLastName)
    }
    const addUserEmail = (valueEmail) => {
        setUserEmail(valueEmail)
    }
    const addUserAddress = (valueAddress) => {
        setUserAddress(valueAddress)
    }
    const addUserPhone = (valuePhone) => {
        setUserPhone(valuePhone)
    }



    const onButtonClick = () => {
        inputEl.current.focus();
        console.log(inputEl.current)

    };

    const addNewUserTableList = () => {
        dispatch(addNewUser({
            name: userName,
            lastName: userLastName,
            email: userEmail,
            address: userAddress,
            phone: userPhone
        }))
    }

    return (
        <div className="App">
            <Header />
            <MainWrapper>
                <div>
                    <FormUsers
                        addUserName={addUserName}
                        addLastName={addLastName}
                        addUserEmail={addUserEmail}
                        addUserAddress={addUserAddress}
                        addUserPhone={addUserPhone}
                        inputEl={inputEl}
                    />
                    <Button onClick={addNewUserTableList} style={{ marginTop: "10px" }} variant="outlined" color="secondary">< PersonAddIcon /></Button>
                    <Button style={{ marginLeft: "10px", marginTop: "10px" }} variant="outlined" color="secondary"> <EditIcon /> </Button>
                </div>
                <UsersCrudsTable onButtonClick={onButtonClick} />

            </MainWrapper >
        </div >
    );
}

export default App;
