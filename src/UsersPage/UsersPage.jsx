import React from 'react';

import { history } from '@/_helpers';
import { userService } from '@/_services';
import CrudUser from './CrudUser';

class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    handleAddUser() {
        history.push('/user/add');
    }

    handleEditUser() {
        history.push('/user/edit');
    }

    handleDeleteUser() {
        history.push('/user/delete');
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <h1>Admin - users page</h1>
                <p>This page can only be accessed by administrators.</p>
                <div>
                    All users from secure (admin only) api end point:
                    {users &&
                        <ul>
                            {users.map((user, index) =>
                                <li key={user.id || index}>{user.firstName} {user.lastName}</li>
                            )}
                        </ul>
                    }
                </div>
                <CrudUser
                    onAddUserClick={this.handleAddUser}
                    onEditUserClick={this.handleEditUser}
                    onDeleteUserClick={this.handleDeleteUser}
                ></CrudUser>
            </div>
        );
    }
}

export { UsersPage };