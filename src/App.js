import { useState } from 'react'
import './App.css';
import UsersCrudsTable from './components/UsersCrudsTable';
import FormUsers from './components/FormUsers';
import Header from './components/Header';

import styled from 'styled-components';

const MainWrapper = styled.div`
width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
`

const App = () => {
    const [newUsersCrud, setNewUsersCrud] = useState({});


    // const addTodo = () => {
    //     if (text.trim().length ) {
    //         setTodos([
    //             ...todos,
    //             {
    //                 id: new Date().toISOString(),
    //                 text,
    //                 completed: false
    //             }
    //         ])
    //         setText('');
    //     }
    // };

    return (
        <div className="App">
            <Header />
            <MainWrapper>
                <FormUsers />
                <UsersCrudsTable />
            </MainWrapper>
        </div>
    );
}

export default App;
