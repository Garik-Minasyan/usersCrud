import React, { useState, useEffect, useRef } from "react";
import ReactTable from 'react-table-6';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserList } from './../store/toolkitReducer';
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import 'react-table-6/react-table.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const UsersTable = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UsersCrudsTable = ({ onButtonClick }) => {
    const usersCrud = useSelector(state => state.toolkit.usersCrud);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const refTable = useRef(null)

    useEffect(() => {
        setData(usersCrud);
    }, [usersCrud]);

    const clickEditButton = (p) => {
        console.log(p);
        console.log(refTable.current.resolvedData[p.index].id)
        const userId = refTable.current.resolvedData[p.index].id;
        const editobarUser = usersCrud.filter(item => item.id === userId);

        onButtonClick()
    }

    const deleteList = () => {
        dispatch(deleteUserList({
            id: data[0]?.id
        }))
    }
    const columns = [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'LastName',
            accessor: 'lastName',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Adrdess',
            accessor: 'address',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'Edit',
            accessor: 'edid',
            Cell: (props) => <Button onClick={() => clickEditButton(props)} variant="contained" color="primary"><EditIcon /></Button>
        },
        {
            Header: 'Delete',
            accessor: 'delete',
            Cell: () => <Button onClick={deleteList} variant="outlined" color="secondary"><DeleteIcon /></Button>
        }
    ]
    return (
        <div>
            <UsersTable>
                <ReactTable ref={refTable} data={data} columns={columns} />
            </UsersTable>
        </div>
    );
};

export default UsersCrudsTable;