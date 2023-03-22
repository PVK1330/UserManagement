import React from 'react'
import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import UserList from "./UserList";

const UserManagement = () => {

    console.log("User Mangement Re rendered.......");

    const [users, setUsers] = useState([]);

    const [editUser, setEditUser] = useState(false);

    const [userToEdit, setUserToEdit] = useState()


    const onAddUser = (user) => {
        let id = 100;
        if (users.length > 0) {
            const lastId = users[users.length - 1].id;
            id = lastId + 1;
        }
        user.id = id;
        setUsers((prevState) => ([...prevState, user]))
    }

    const onDelete = (id) => {
        const newList = users.filter(user => user.id !== id);
        setUsers(newList);
    }

    const onEdit = (id) => {
        const userToEdit = users.find(user => user.id === id);
        console.log(userToEdit);
        setUserToEdit(userToEdit);
        setEditUser(true);
    }

    const onUpdate = (user) => {
        const usersList = [...users];
        const index = usersList.findIndex((u => u.id == user.id));
        usersList[index] = { ...user };
        setUsers(usersList)
        setEditUser(false)
        setUserToEdit(null)
    }

    const onUpdateCancel = () => {
        setEditUser(false)
        setUserToEdit(null)
    }
    return (
        <>
            <div>
                <AddUser onSave={onAddUser} />
                {editUser && <EditUser
                    userToEdit={userToEdit}
                    showModel={editUser}
                    onUpdate={onUpdate}
                    onCancel={onUpdateCancel} />}
                <UserList users={users} onDelete={onDelete} onEdit={onEdit} />
            </div>

        </>
    );
}


export default UserManagement;
