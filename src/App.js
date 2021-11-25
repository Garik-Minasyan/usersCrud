import { useState, useRef } from 'react';
import './App.css';
import UsersCrudsTable from './components/UsersCrudsTable';
import FormUsers from './components/FormUsers';
import Header from './components/Header';
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
    // const [usersInfo, setUserInfo] = useState({});

    const inputEl = useRef();

    // const addUserInfo = (userName, userLastName, userEmail, userAddress, userPhone) => {
    //     setUserInfo({
    //         name: userName,
    //         lastName: userLastName,
    //         email: userEmail,
    //         address: userAddress,
    //         phone: userPhone
    //     })
    // }

    const onButtonClick = () => {
        inputEl.current.focus();

    };

    return (
        <div className="App">
            <Header />
            <MainWrapper>
                <div>
                    <FormUsers
                        // addUserInfo={addUserInfo}
                        inputEl={inputEl}
                    />
                    {/* <Button style={{ marginTop: "10px" }} variant="outlined" color="secondary">< PersonAddIcon /></Button> */}
                    <Button style={{ marginLeft: "10px", marginTop: "10px" }} variant="outlined" color="secondary"> <EditIcon /> </Button>
                </div>
                <UsersCrudsTable
                    onButtonClick={onButtonClick}
                />

            </MainWrapper >
        </div >
    );
}

export default App;
