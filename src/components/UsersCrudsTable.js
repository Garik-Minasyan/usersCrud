import React from "react";
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
`

const UsersCrudsTable = () => {
    const usersCrud = useSelector(state => state.toolkit.usersCrud);
    const dispatch = useDispatch();



    const data = usersCrud;
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
            Cell: () => <Button variant="contained" color="primary"><EditIcon /></Button>
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
                <ReactTable data={data} columns={columns} />
            </UsersTable>
        </div>
    );
};

export default UsersCrudsTable;