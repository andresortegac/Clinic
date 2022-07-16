import React from 'react'

const Users = ({users}) => {
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Id_user</th>
                    <th>Name_user</th>
                    <th>Password_user</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id_user}>
                        <th>{user.id_user}</th>
                        <th>{user.name_user}</th>
                        <th>{user.password_user}</th>
                    </tr>
                ))}
                
            </tbody>

        </table>
    );
}

export default Users;