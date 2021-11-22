import { useState } from 'react';
import './App.css';
import UsersCrudsTable from './components/UsersCrudsTable';
import FormUsers from './components/FormUsers';
import Header from './components/Header';
import { addNewUser } from './store/toolkitReducer';
import { useDispatch } from 'react-redux';

import { Button } from "@material-ui/core";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

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
                <FormUsers
                    addUserName={addUserName}
                    addLastName={addLastName}
                    addUserEmail={addUserEmail}
                    addUserAddress={addUserAddress}
                    addUserPhone={addUserPhone}
                />
                <UsersCrudsTable />
                <Button onClick={addNewUserTableList} style={{ position: 'absolute', top: "500px", left: "330" }} variant="outlined" color="secondary">< PersonAddIcon /></Button>

            </MainWrapper>
        </div>
    );
}

export default App;
