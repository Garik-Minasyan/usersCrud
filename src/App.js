import { useState } from 'react'
import './App.css';
import UsersCrudsTable from './components/UsersCrudsTable';

const App = () => {
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
            <UsersCrudsTable />
        </div>
    );
}

export default App;
